import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class LearnResourcesDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    resource: '',
  }

    this.deleteResource = this.deleteResource.bind(this);
  };

deleteResource() {
//Delete question
      var self = this
      axios.delete('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/delete?id='+this.props.params.resourceID, {
        params: {
          id: this.props.params.resourceID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
        document.location = '/problem/'+ self.props.params.probID + '/learn/resources'
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
                    <legend>Delete Resource</legend>
                         <div>Are you sure you would like to delete this resource?</div>
                         <br />
                         <div onClick={this.deleteResource} id="deleteButton">Delete</div>
                         <Link to='/problem/${resource.TypeID}/resources'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
