
import React from 'react';
import './Card.module.css';
import {AiOutlinePlayCircle} from 'react-icons/ai';

function Card(props) {
  return (
    <div>
    <div className = "mr-1 relative opacity-1 hover:opacity-50 hover:select-all  mb-1">
        <img src = {props.thumbnail} />
        <div className = "absolute top-14 left-24 font-bold opacity-0 hover:opacity-100 hover:z-10 text-sky-700">
        <AiOutlinePlayCircle className = "text-6xl"/>
        </div>
    </div>
    </div>
  )
  }

export default Card;
