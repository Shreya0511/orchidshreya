import React,{useState} from "react";
import Searchbar from "./Searchbar";
import SearchList from './SearchList';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
    const [results,setResults]=useState([]);

    const cancelHandler = () => {
        setResults([]);
    }
     

    return (
        <>
       <div className="w-full text-white flex justify-between p-4 bg-stone-800 mb-2">
        <div className="logo">
         <Link to= "/">   <h1 className="text-3xl pl-2 text-sky-900 font-bold font-serif">O<span>R</span>CHID</h1></Link>
        </div>
        
        <Searchbar setResults={setResults}/>

            <ul className="flex row space-x-1 ">
                <li>
                 <Link to = "/Login">
                    <button className="rounded-full py-1 h-9 w-32 flex align-middle justify-center bg-sky-900 hover:bg-sky-700">Login</button> 
                                                        </Link>
                </li>
                <li>
                    <Link to = "/Signup">
                     <button className="rounded-full py-1 h-9 w-32 flex align-middle justify-center bg-sky-900 hover:bg-sky-700">SignUp</button>
                    </Link>
                </li>
            </ul>
         
         {/* <SearchList results={results}/> */}
       </div>           
         {results.length !== 0 && <Modal onClick = {cancelHandler} content = {results}/>} 
         </>
    )
}
export default Navbar