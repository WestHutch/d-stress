import React from 'react';
import './buttonGroup.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonGroup = () => {
  return (
    <nav>
      <div className='buttcontainer'>
        <CustomLink className='link' to='/balloon'>Balloon</CustomLink>
        <CustomLink className='link' to='/breathing'>Breathing</CustomLink>
        <CustomLink className='link' to='/soothing'>Sounds</CustomLink>
        <CustomLink className='link' to='/thinking'>Thinking</CustomLink>
        <CustomLink className='link' to='/shimmery'>Shimmer</CustomLink>
      </div>
    </nav>
  );
};

function CustomLink(props) {
  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={isActive ? "active" : "inactive"}>
      <Link to={props.to} {...props}>
        {props.children}
      </Link>
    </div>
  );
}

CustomLink.propTypes = {
  to: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
