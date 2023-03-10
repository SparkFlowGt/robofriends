 import { ChangeEvent,ChangeEventHandler   } from 'react';
import './search-box-style.css'


type SearchBoxProps =   {
    className:string,
    placeholder?:string;
    handleChange:(event : ChangeEvent<HTMLInputElement>)=>void;
};


export   const SearchBox= ({
    className,
    placeholder,
    handleChange
}:SearchBoxProps) =>(
    <input 
    className={`search-box${className}`}
        type='search' 
        placeholder = {placeholder}
        onChange= {handleChange}
        
        
        />
);
