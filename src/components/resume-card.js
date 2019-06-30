import React from 'react';

class ResumeCard extends React.PureComponent {
    render() {
        return (
            <div class="resume-item m-lg-2 col-12">
              <div class="resume-content">
                <h3 class="mb-0">resume.bertomoore.dev</h3>
                <div class="subheading">
                  <i class="fab fa-bootstrap"></i>
                  <i class="fab fa-sass"></i>
                  <i class="fab fa-js-square"></i>
                  <i class="fab fa-vuejs"></i>
                </div>
                <hr />
                <p>
                  A website holding samples of my work as well as my contact information.
                  Resume portion of bertomoore.dev.
                </p>
                <hr />
                <em>Copyright &copy; Berto Moore MIT&nbsp;License</em>
              </div>
            </div>
        )
    }
}

export default ResumeCard