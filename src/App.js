// import './App.css';
// import React from 'react';
// import {BrowserRouter,Routes, Route} from 'react-router-dom';
// // import { BrowserRouter, Link} from "react-router-dom";

// // import { Switch } from '@mui/material';
// // import { Routes, Route } from 'react-router';
// function App() {
//   return <>
//      <BrowserRouter>
//       <Routes>
//          <Route path='/' element = {<Layout/>}></Route>
//          <Route path = '/Login' element = {<LoginPage/>}/>
//       </Routes>
//      </BrowserRouter>
//   </>
//   }

// export default App;

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/layouts/Layout';
import LoginPage from './components/Pages/LoginPage';
import SignUp from './components/Pages/Signup';
import Chat from './components/Pages/Chat';
import VideoStreaming from './components/layouts/VideoStreaming';

function App(){
     return (
    <>
  <BrowserRouter>
      <Routes>
       <Route path='/' element = {<Layout/>}/>
       <Route path = '/Login' element = {<LoginPage/>}/>
       <Route path= '/Signup' element = {<SignUp/>}/>
       <Route path = '/Chat' element = {<Chat/>}/>
       <Route path = '/Video' element = {<VideoStreaming video = "https://rr3---sn-qxaelnes.googlevideo.com/videoplayback?expire=1681040843&ei=a1EyZOnKH4iG8gP2rKWgDw&ip=23.88.39.196&id=o-AD9lgkkASaAzIQrcRXu3WYhRn5kkWwGOpr21QB_h4eBx&itag=18&source=youtube&requiressl=yes&spc=99c5CRroxOV2J3ckzoRv6ktgbfgUXL4&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=180.024&lmt=1665261602048558&fexp=24007246&beids=24512782&c=ANDROID&txp=4538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgQfE7ZgPMQgz7YRfk0O_-MeCLOU3rWp3YmWKzG105IJkCIEOUKKsA-vCxBerWxfs4N98AkpiOXSQsxwUWCHSjOGt6&rm=sn-4g5ek67l&req_id=753c6fda000ea3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-o3o-qxa67l&cms_redirect=yes&cmsv=e&mh=S8&mip=14.139.241.211&mm=29&mn=sn-qxaelnes&ms=rdu&mt=1681020785&mv=m&mvi=3&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJn8t81nI0S8K97UT0rkK3G2qzTZUbvg9Wh4oNHJPNfkAiAjSA5g0oTS1eAox6LzVLo8r-jLVX93LWgxKmylVVWSaA%3D%3D"/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
     };

export default App;