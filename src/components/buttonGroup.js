import React from 'react';
import './buttonGroup.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BsFillBalloonFill, BsSquare} from 'react-icons/bs';
import {AiFillSound} from 'react-icons/ai';
import {FaBrain} from 'react-icons/fa';
import {TbChartBubble} from 'react-icons/tb';


const ButtonGroup = () => {
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

  return (
    <nav>
      <div className='buttcontainer'>
        <CustomLink className='link' to='/balloon'><p><BsFillBalloonFill/><br/>Balloons</p></CustomLink>
        <CustomLink className='link' to='/breathing'><p><BsSquare/><br/>Breathing</p></CustomLink>
        <CustomLink className='link' to='/soothing'><p><AiFillSound/><br/>Sounds</p></CustomLink>
        <CustomLink className='link' to='/thinking'><p><FaBrain/><br/>Thinking</p></CustomLink>
        <CustomLink className='link' to='/shimmery'><p><TbChartBubble/><br/>Bubbles</p></CustomLink>
      </div>
    </nav>
  );
};




export default ButtonGroup;
