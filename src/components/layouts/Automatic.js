import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { Videosapi } from '../Data/YoutubeApiresponse';

function Automatic() {
    const slides = [
    {
        title: 'Dream Girl',
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8oL_a3Yk9gNkqAaJLzYzATnP2v4boFat_g&usqp=CAU'

    },
    { 
        title : 'Fault in our Stars!',
        url : 'https://plus.unsplash.com/premium_photo-1678935939781-7e5df8a2001b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'

    },
    {
        title :'Beauty and Beast',
        url : 'https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
        title :'Blackpink',
        url : 'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'

    }
];

const[currentIndex, setCurrentIndex] = useState(0);
const[curridx, setcurridx] = useState(0);

const prevHandler = () => {
    if(currentIndex > 0){
        setCurrentIndex(currentIndex-1);
        
    }
    else{
        setCurrentIndex(Videosapi.length-1);
    }
    console.log(currentIndex);
}

const nextHandler = () => {
    if(currentIndex < Videosapi.length-1){
        setCurrentIndex(currentIndex+1);
    }
    else{
        setCurrentIndex(0);
    }
}
  return (

    <div className = 'max-w-[100%] h-[70vh] w-full m-auto py-1 px-4 relative rounded bg-black'>
       <div style = {{backgroundImage: `url(${Videosapi[currentIndex].thumbnail[2].url})`}}className = 'w-full h-full roundex-2xl bg-center bg-cover duration-500 rounded-3xl'></div>
        <div className='absolute top-[65%] left-10 text-3xl font-bold text-teal-500 font-sans'>{Videosapi[currentIndex].title}</div>
    <Link to = '/Video'>  <button variant="contained" className='max-w-[7rem] h-[2.8rem] absolute top-[75%] -translate-x-0 translate-y-{70%} left-10 text-white cursor-pointer bg-sky-900 rounded-2xl p-2 hover:bg-sky-800'>Watch Now</button></Link> 
        <div className='group-hover:block absolute top-[70%] -translate-x-0 translate-y-{-70%} right-20 text-2xl square-full p-2 bg-black/20 text-white cursor-pointer' onClick = {prevHandler}>
            <BsChevronCompactLeft size = {30}/></div>
        <div className = 'group-hover:block absolute top-[70%] -translate-x-0 translate-y-{-70%} right-8 text-2xl square-full p-2 bg-black/20 text-white cursor-pointer' onClick = {nextHandler}>
             <BsChevronCompactRight size={30}/>
       </div>
      
    </div>
  )
}

export default Automatic;
