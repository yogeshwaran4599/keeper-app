import React, { useState,useEffect } from 'react';
import CreateNote from './components folder/createnote/CreateNote';
import Header from './components folder/Header/Header';
import NoteList from './components folder/note list/NoteList';


function App() {
  const[content,setContent]=useState([]);
  const LOCAL_STORAGE_KEY="content";

  function addContent(input){
    setContent((prevContent)=>{
      return [...prevContent,input]
      
    });
  }

  function deleteItem(id){
    setContent((prevContent)=>{
       return prevContent.filter((noteItem,index)=>{
        return index!==id;
      });
     
    });
  }

  useEffect(()=>{
    const retriveContent=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContent) setContent(retriveContent);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(content))
  },[content]);

  return (
    <div>
      <Header/>
      <CreateNote onAdd={addContent}/>
      {content.map((noteItem,index)=>{
        return(
          <NoteList
            title={noteItem.title}
            content={noteItem.content}
            key={index}
            id={index}
            onChecked={deleteItem}
          />
        );
      })}
     
    </div>
  )
}

export default App
