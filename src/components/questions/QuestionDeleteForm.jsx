import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

export default class QuestionDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    question: '',
  }

    this.postQuestion = this.postQuestion.bind(this);
  };

postQuestion() {
  //Read field items into component state
  this.state.question = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post('http://localhost:10000/auth/questions/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.question,
  })
    .then(function (result) {
      document.location = window.location.pathname 
    })
    .catch(function (error) {
      alert("I'm sorry there was a problem with your request")
      });
    } 

    //else post to problem
    //probID will be used
    else {
      axios.post('http://localhost:10000/auth/questions/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.question,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }

  }
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Question</legend>
                         <textarea name="questionText" required="required" id="questionTextArea" autoFocus ></textarea>
                         <br />
                         <input type="button" value="Ask" onClick={this.postQuestion} id="askquestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}