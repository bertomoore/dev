import React from 'react';
import PageSection from '../components/section';

class PortfolioSection extends React.PureComponent {
    render() {
        return (
          <PageSection header='Portfolio'
            content={

              <div>
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
        
                <div class="resume-item m-lg-2 col-12">
                  <div class="resume-content">
                    <h3 class="mb-0">teamtafoya.com</h3>
                    <div class="subheading">
                      <i class="fab fa-ubuntu"></i>
                      <i class="fab fa-python"></i>
                      <i class="fab fa-js-square"></i>
                      <i class="fab fa-bootstrap"></i>
                      <i class="fab fa-css3-alt"></i>
                    </div>
                    <p>
                      A Django-powered web app to manage properties for Tafoya Team LLC.
                      Website tasks include serving views based on availability,
                      application requests for available properties,
                      tenant portal page to place service requests,
                      and a custom admin page to manage all activity.
                    </p>
                    <hr />
                    <em>Copyright &copy; Tafoya Team LLC Proprietary&nbsp;License</em>
                  </div>
                </div>
              </div>

            } />
        )
    }
}

export default PortfolioSection