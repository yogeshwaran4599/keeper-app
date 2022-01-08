import React from 'react';
import "./NoteList.css";
import DeleteIcon from '@mui/icons-material/Delete';

function NoteList(props) {
    return (
        <div className='list-wrapper'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=>{props.onChecked(props.id)}}><DeleteIcon/></button>
        </div>
    )
}

export default NoteList;
