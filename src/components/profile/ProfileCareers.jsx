import React from 'react';
import { Link  } from 'react-router';

export default class ProfileAbout extends React.Component {
   render() {
      return (
        <div>
              <div id="aboutProseDescriptions">
                 <span id="blue">XPrincipia</span> is a startup looking for <span id="blue">high-level team members</span>. 
                 <br />
                 <br />
                 <span id="blue">Expertise</span> is needed in <span id="blue">one or more</span> of the following areas:
                 <br />
                 <div id="aboutList">
                 1. <span id="blue">Backend</span> or <span id="blue">Frontend Programming</span>
                 <br />
                 2. <span id="blue">Sales </span> or <span id="blue">Business Development</span> 
                 <br />
                 3. <span id="blue">Science</span> or <span id='blue'>Technology Consultation</span>
                 </div>
                 <br />

                 If <span id="blue"> you believe </span> in <span id="blue">our cause</span>, contact us:
              </div>
            <div id="profileAboutContact">
                careers@xprincipia.com
            </div>
            <div id="profileAboutQuote">
                It is the business of the future to be dangerous … The major advances in civilization are processes 
                that all but wreck the societies in which they occur.
                <br />
                <br />
                - A.N. Whitehead
            </div>
        </div>
      );
   }
}
