import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class SuggestionEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    suggestion: '',
  }

    this.updateSuggestion = this.updateSuggestion.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/suggestions/ID?id='+this.props.params.suggID).then(function (response) {
          self.setState({
              suggestion: response.data
          })
          
          document.getElementById('questionEditTextArea').value = self.state.suggestion.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

  updateSuggestion() {
    //Read field items into component state
    this.state.suggestion = document.getElementById('questionEditTextArea').value

    axios.put('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/suggestions/update?id='+this.props.params.suggID, {
        type:'0',
        typeID: this.props.params.probID,
        username: cookie.load('userName'),
        description : this.state.suggestion,
      })
        .then(function (result) {
          document.location = window.location.pathname 
        })
        .catch(function (error) {
          alert("I'm sorry there was a problem with your request")
        });
    }

  
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Suggestion</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <Link to={`/problem/${this.state.suggestion.TypeID}/suggestions`}>
                          <div onClick={this.updateSuggestion} id="editButton">Edit</div>
                         </Link>
                         <Link to={`/problem/${this.state.suggestion.TypeID}/suggestions`}>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}