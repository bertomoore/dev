import React from 'react';
import Section from '../components/section';

class EducationSection extends React.PureComponent {
  render() {
    return (
      <Section header="Education"
        content={(
          <div>
            <div class="education-card d-flex flex-column flex-md-row justify-content-between p-4 m-3 card">
              <div class="education-content">
                <h3 class="mb-0">Strayer University</h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Management Information Systems</div>
                <div>Concentration in Software Engineering</div>
                <p><strong>GPA: 4.00</strong></p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary date-range">Fall 2018 - Present</span>
              </div>
            </div>
            <div class="education-card d-flex flex-column flex-md-row justify-content-between p-4 m-3 card">
              <div class="education-content">
                <h3 class="mb-0">Previously Used Resources</h3>
                <div class="subheading">Languages</div>
                <p>Python, JavaScript, Go, Lua, BASH, R, Java, C++, PHP, MATLAB</p>
                <div class="subheading mt-3">Frameworks/tools</div>
                <p>Django, React, Vue, Wordpress, Bootstrap, SASS, Gulp, Nodemon, RStudio</p>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default EducationSection