import React from 'react';
import Section from '../components/section';

class EducationSection extends React.PureComponent {
  render() {
    return (
      <Section header="Education"
        content={(
          <div>
            <div className="education-card education-card p-4 mx-3 mb-3 card">
              <hr />
              <div className="education-content">
                <div>
                  <h3 className="mb-0 university">Strayer University</h3>
                  <span className="text-primary date-range">Fall 2018 - Present</span>
                </div>
                <div className="subheading">Bachelor of Science</div>
                <div className="font-italic">Management Information Systems</div>
                <div className="font-italic">Concentration in Software Engineering</div>
                <p><strong>GPA: 4.00</strong></p>
                <hr />
              </div>

            </div>
            <div className="education-card p-4 m-3 mt-5 card">
              <hr />
              <div className="education-content">
                <h3 className="mb-0">Previously Used Resources</h3>
                <div className="subheading">Languages</div>
                <p class="font-italic">Python, JavaScript, Go, Lua, BASH, R, Java, C++, PHP, MATLAB</p>
                <div className="subheading mt-3">Frameworks/tools</div>
                <p class="font-italic">Django, React, Vue, Wordpress, Bootstrap, SASS, Gulp, Nodemon, RStudio</p>
              </div>
              <hr />
            </div>
          </div>
        )}
      />
    )
  }
}

export default EducationSection