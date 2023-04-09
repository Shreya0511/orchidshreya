import React from 'react';
import Card from '../UI/Card';
import classes from './Videoss.module.css';

function Videoss() {
  return (
    <div className = {classes.videoContainer}>

      <div className='top-[65%] left-10 text-2xl font-bold text-white font-sans flex align-middle pb-10 bg-black pl-10 pt-10'>Trending</div>
       <div className = 'flex gap-4 pl-4 mb-10' style = {{display : "flex", flexDirection : "row",flexWrap : "wrap" , margin: "auto", alignItems : "center", justifyContent : "center", marginBottom : "2rem"}}>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
        <Card thumbnail = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoaMg8gN0QTpJO3PR2_4gwGhS509TmXLY5A&usqp=CAU"/>
       </div>

    </div>
  )
}

export default Videoss;
