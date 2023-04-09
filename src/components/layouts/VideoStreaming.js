import React from 'react'
import Navbar from './Navbar'

function VideoStreaming(props) {
  return (
    <div>
        <Navbar/>
        <div className = "bg-black m-auto text-white  w-5/5 rounded-3xl h-full">
            <div className = "m-auto text-white border-2 w-4/5 rounded-3xl h-96">
            <video width="1180px" height="100px" controls>
           <source src={props.video} type="video/mp4"/>
             <source src="movie.ogg" type="video/ogg"/>
           Your browser does not support the video tag.
              </video>
            </div>
            <div className = "m-auto w-4/5 mt-11">
                Hey there
            </div>
            </div>
      
    </div>
  )
}

export default VideoStreaming
