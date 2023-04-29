import React from 'react';
import './App.css';
import ButtonGroup from './components/buttonGroup';
import { Route, Routes } from 'react-router-dom';
import Balloon from './pages/balloon';
import Breathing from './pages/breathing';
import Soothing from './pages/soothing';
import Thinking from './pages/thinking';
import Shimmery from './pages/shimmery';
import Home from './pages/home';

function App() {
  return (
    <>
      <div className='scren'>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/balloon" element={<Balloon />} />
            <Route path="/breathing" element={<Breathing />} />
            <Route path="/soothing" element={<Soothing />} />
            <Route path="/thinking" element={<Thinking />} />
            <Route path="/shimmery" element={<Shimmery />} />
          </Routes>
        </div>
        <ButtonGroup className='buttGroup'/>
      </div>
    </>
  );
}

export default App;
