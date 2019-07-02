import React from 'react';
import Section from '../components/section';

class EducationSection extends React.PureComponent {
  render() {
    return (
      <Section header="Education"
        content={(
          <div className="pt-3">
            <div className="education-card p-4 m-3 card">
              <hr />
              <div className="education-content">
                <div>
                  <h3 className="mb-0 university">Strayer University</h3>
                  <span className="text-primary date-range">Fall 2018 - Present</span>
                </div>
                <div className="subheading">Bachelor of Science</div>
                <div>Management Information Systems</div>
                <div>Concentration in Software Engineering</div>
                <p><strong>GPA: 4.00</strong></p>
                <hr />
              </div>

            </div>
            <div className="education-card p-4 m-3 card">
              <hr />
              <div className="education-content">
                <h3 className="mb-0">Previously Used Resources</h3>
                <div className="subheading">Languages</div>
                <p>Python, JavaScript, Go, Lua, BASH, R, Java, C++, PHP, MATLAB</p>
                <div className="subheading mt-3">Frameworks/tools</div>
                <p>Django, React, Vue, Wordpress, Bootstrap, SASS, Gulp, Nodemon, RStudio</p>
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