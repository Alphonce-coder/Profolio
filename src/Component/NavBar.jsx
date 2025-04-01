import React from "react";

export default function Navbar(props) { 
  const {title, links, pageheader} = props;
  //bgColor, textColor,
  return (
    <nav >
        
        <h1>{pageheader}</h1>
        <div style={{
        width: '100%',
        backgroundColor: '#b5b1ff',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}> 
    <div>
            <h1 style={{color:'blue', fontSize: '30px'}}>{title}</h1>
        </div>
        
            {links && links.map((link, index) => (
              <ul key={index} className='flex justify-between item-center gap-4'>
                <li className='cursor-pointer text-blue-500 hover:text-blue-800'>{link.text}
                </li>
              </ul>
            ))}
        </div>      
    </nav>
  );
}