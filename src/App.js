import React, { Component } from 'react';
import {addComment, deleteComment} from './actions';
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react'
import './App.css';

   
const ListCreate = ({ name, comment, index  }) => {
  return (
    <div className="list">
       <div className="user"><img src="https://s.ytimg.com/yts/img/avatar_48-vfllY0UTT.png" alt=""/></div>
          <div className="comentario">
           <li>
              <h4 className="name">{name}</h4>
              <p>{comment}</p>
          </li>
        </div>
        <button onClick={() => deleteComment(index)}><a>DeleteComment</a></button>
          <a href="">Report as abuse</a>
    </div>
  );  
}
    
    const App = ({comments }) => {
      const onSubmit=e => {e.preventDefault(); 
        if(this.name.value && this.comment.value){
          addComment(this.name.value, this.comment.value);
          this.name.value = '';
          this.comment.value = '';
      }}

      return (
        <div className="container">
        <div className="box">
            <h3> NEW COMMENT </h3>
            <form onSubmit={onSubmit}>
            <FormGroup>
            <InputGroup className="input">
              <FormControl type="text" placeholder = "add name" inputRef={ref => { this.name = ref }} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl  type="text" placeholder = "add comments" inputRef={ref => { this.comment = ref }} />
            </InputGroup>
          </FormGroup>
          <button type="submit" name="submit" value="submit">POST COMMENT</button>
            </form>
            </div>
          <div>
            <h4>COMMENTS</h4>
              <p className="contador">{comments.length} Comments:</p>
              <ul>{comments.map((item, index ) => <ListCreate key = {index} name={item.name} comment ={item.comment} index={index}/>)}</ul>
          </div>
        
        </div>
      );
  }

const mapToProps = ({comments }) => ({comments});
export default connect(mapToProps)(App);
