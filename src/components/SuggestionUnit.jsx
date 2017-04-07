import React from 'react';


export default class SuggestionUnit extends React.Component {
	constructor(props){
        super(props);
	}
	render() {
		return (
	    <div>
			<ul> {this.props.suggestions.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(suggestion) {
  
    return (
       <li key={suggestion.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">Q: Jack Jackson</div>
                	<div id="suggestionText">{suggestion.Description}</div>
				</div>
				<button type="button" id="suggestionVote">Vote</button>   
            <br /><br /> 
        </li>)

  }
}

