import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
  const deleteNode = () =>{
    props.deleteItem(props.id);
  }
  return (
    <>
    <div className="note">
    <h1 style={{color: '#2B81E2',}}> {props.title} </h1>
    <br/>
    <p> {props.content} </p>
    <button className="btn" onClick={deleteNode}>
    <DeleteOutlineIcon className="deleteIcon"/>
    </button>
    </div>
    </>
  );
};
export default Note;
