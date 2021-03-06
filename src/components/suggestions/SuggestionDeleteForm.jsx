import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link, browserHistory} from 'react-router';

export default class SuggestionDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    suggestion: '',
  }

    this.deleteSuggestion = this.deleteSuggestion.bind(this);
  };

deleteSuggestion() {
//Delete question
    var self = this
    axios.delete('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/suggestions/delete?id='+this.props.params.suggID, {
      params: {
        id: this.props.params.suggID,
        username: cookie.load('userName')
      }
    })
    .then(function (result) {
      document.location = '/problem/'+ self.props.params.probID + '/suggestions'
    })
    .catch(function (error) {
      alert("I'm sorry there was a problem with your request")
    });
  }
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Suggestion</legend>
                         <div>Are you sure you would like to delete this suggestion?</div>
                         <br />
                          <div onClick={this.deleteSuggestion} id="deleteButton">Delete</div>
                         <Link to={`/problem/${this.props.params.probID}/suggestions`}>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}



