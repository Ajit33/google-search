import React, { useState } from 'react'
import MicIcon from "../assets/mic.svg";
import Camera from "../assets/image.svg";
import {AiOutlineSearch} from "react-icons/ai";
 import {IoMdClose}from "react-icons/io";
const SearchInput = () => {
    const[searchQuery,setSearchQuery]=useState("")
  return (
    <div id="searchbox" className='h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0'>
        <AiOutlineSearch size={18} color='#9aa0a6' />
        <input type='text' onChange={(e)=>setSearchQuery(e.target.value)} onKeyUp={(e)=>setSearchQuery(e.target.value)} value={searchQuery} autoFocus className='grow outline-0 text-black'/>
        <div className='flex items-center gap-3'>
            {searchQuery && (
                <IoMdClose size={24} color="#70757a" className='cursor-pointer' 
                onClick={()=>setSearchQuery("")}
                />
  )
        }
               
            
            <img  className="h-6 cursor-pointer" src={MicIcon} />
            <img  className="h-6 cursor-pointer" src={Camera} />
        </div>
    </div>
  )
}

export default SearchInput