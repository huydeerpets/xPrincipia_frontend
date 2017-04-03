import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'min-jquery';

export default class CreateProblem extends React.Component {

  constructor(){
    super();

    this.state= {
      title: '',
      field: '',
      description: '',
      requirements: '',
      references: ''
    }

    this.postSolution = this.postSolution.bind(this);
  };

  postSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('problemTitle').value
    this.state.field = document.getElementById('problemField').value
    this.state.description = document.getElementById('problemDescriptionForm').value
    this.state.requirements = document.getElementById('problemRequirementsForm').value
    this.state.references = document.getElementById('problemReferencesForm').value

  //Ajax post solution request
  $.ajax({
    crossDomain: 'true',
    type: 'POST',
    headers: {'Content-Type' : 'application/json'},
    url: 'http://localhost:10000/solutions/create',
    processData: false,
    data: JSON.stringify({
      'title' : this.state.title,
      'field' : this.state.field,
      'description' : this.state.description,
      'requirements' : this.state.requirements,
      'references' : this.state.references
    }),
    success: function(result){
      console.log(result)

      alert('Your solution has been posted.')
    },
    error: function(result){
      console.log(result)

      alert('There was an error.')
    },

    });
  };

  render() {
      return (
        <div id="createProblemBox">
            <form id="createForm">
              <fieldset>
                  <legend>Create:Problem</legend>
                        <label htmlFor="problemTitle">Title<br />
                            <input type="text" name="problemTitle" required="required" maxLength="140" placeholder="Enter title here" id="problemTitleForm" autofocus/>
                          </label><br />

                        <label htmlFor="problemField">Field<br />
                            <input type="text" name="problemSubject" required="required" maxLength="50" placeholder="Enter field of study here" id="problemFieldForm"/>
                          </label><br />

                        <label htmlFor="problemSummary">Summary<br />
                            <textarea name="problemField" required="required" maxLength="250" placeholder="Summarize in 140 characters here." id="problemFieldForm"/>
                          </label><br />

                        <label htmlFor="problemDescription">Description<br />
                            <textarea name="problemDescription" required="required" placeholder="Describe the problem in detail here." id="problemDescriptionForm">
                            </textarea></label><br />

                        <label htmlFor="problemRequirements">Requirements<br />
                            <textarea name="problemRequirements" placeholder="List requirements that solutions need to fulfill. Please enter as a list with a space between each requirement. " id="problemRequirementsForm">
                            </textarea></label><br />

                        <label htmlFor="problemReferences">References<br />
                            <textarea name="problemReferences" placeholder="Provide your references here." id="problemReferencesForm">
                            </textarea></label><br />

                        <input type="submit" value="Create" onClick={this.postProblem} id="submitProblem"/>
              </fieldset>
            </form>
        </div>
      );
   }
}
