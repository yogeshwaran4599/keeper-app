import React, { useState } from 'react';
import "./CreateNote.css";
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {
    const[isExpaned,setIsExpanded]=useState(false);
    const[input,setInput]=useState({
        title:'',
        content:''
    });

    function handleChange(event){
        const {name,value}=event.target;
        setInput((prevInput)=>{
            return{
                ...prevInput,
                [name]:value
            };
        });
    } 

    function handleClick(event){
        event.preventDefault();
        props.onAdd(input);
        setInput({
            title:"",
            content:""
        });
    }

    function expand(){
        setIsExpanded(true);
    }

    return (
        <div className='form-wrapper'>
            <form className='form-section'>
            {isExpaned &&(
                <input name='title' type='text' placeholder='enter title' value={input.title} onChange={handleChange} /> )}
                <textarea name='content' placeholder='take a note...' value={input.content} onChange={handleChange}  onClick={expand} rows={isExpaned ? 3:1} />
                <button onClick={handleClick}><AddIcon/></button>                
            </form>
            
        </div>
    )
}

export default CreateNote;
