import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import process from 'process';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }) => {
    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Use the StaleWhileRevalidate strategy for same-origin resources, 
// such as CSS, JS, and images, which are not precached.
registerRoute(
  ({ url }) => url.origin === self.location.origin,
  new StaleWhileRevalidate()
);

// Use the CacheFirst strategy for resources loaded from external origins.
registerRoute(
  ({ url }) => url.origin !== self.location.origin,
  async (args) => {
    try {
      // Try to fetch the resource from the network.
      const response = await fetch(args.request);

      // If successful, add it to the cache.
      const cache = await caches.open('external-resources');
      await cache.put(args.request, response.clone());

      // Return the fetched response.
      return response;
    } catch (error) {
      // If the network request fails, try to fetch the resource from the cache.
      const cache = await caches.open('external-resources');
      const cachedResponse = await cache.match(args.request);

      // If the resource is found in the cache, return it.
      if (cachedResponse) {
        return cachedResponse;
      }

      // If the resource is not found in the cache, throw the error.
      throw error;
    }
  }
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
