import React from 'react'
import {ProSidebarProvider,Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function Slidebar() {
  return (
    <>
     <ProSidebarProvider>
   <Sidebar>
   <div className="bg-black text-white" style={{height: "100vh", width: "18rem"}}>
  <h1 className='mx-2'>Logo</h1>
   <Menu>
   
    <MenuItem> <Link to="/home"> <i class="fa fa-home mx-2" aria-hidden="true"></i>Home</Link></MenuItem>
    <MenuItem> <Link to="/about"> <i class="fa fa-address-book mx-2" aria-hidden="true"></i> About</Link> </MenuItem>
  </Menu>
  </div>
</Sidebar>
</ProSidebarProvider>
      
    </>
  )
}
