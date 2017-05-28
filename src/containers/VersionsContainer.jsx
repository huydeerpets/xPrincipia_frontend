import React from 'react';
import {Link} from 'react-router';
import SolutionUnit from '../components/SolutionUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import VersionForm from '../components/VersionForm.jsx';
import VersionsUnit from '../components/VersionsUnit.jsx';
import axios from 'axios'

export default class VersionsContainer extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutions: []
        }

    };
        componentDidMount(){
        var self = this;
        window.scrollTo(0,0);
        return axios.get('http://localhost:10000/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                solutions: response.data
            })
        })
    }

   render() {
      return (
      <div> 
          
        <div id="fullVersions">
            <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/versionform`}>
                <div id="developVersionsButton">Develop v.112</div>
            </Link>
            <VersionsUnit solutions={this.state.solutions} probID={this.props.params.probID} solutionID={this.props.params.solutionsID} />
            <SideBarMore />
        </div>
      </div>
      );
   }
}