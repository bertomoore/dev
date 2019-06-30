import React from 'react';

class AboutSection extends React.PureComponent {
    render() {
        return (
          <div>
            <hr class="m-0" />
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
              <div class="w-100">
                <h1 class="mb-0">
                  <span class="text-primary">Berto Moore</span>
                </h1>
                <div class="subheading mb-5">
                  Developer. Designer. Communicator.
                </div>
                <p class="lead mb-5">
                  Hello, I'm a software developer and web designer residing in Albuquerque, New Mexico.
                  I have over two years of experience in various tasks behind building websites,
                  including wireframing, front-end programming, database management, QA testing, and more.
                </p>
                <p class="lead mb-5">
                  I also have experience in customer service and tech support, providing me a firsthand site
                  of the importance in communication and empathy even in more technical roles.
                </p>
                <p class="lead mb-5">
                  If you'd like to get details or learn more about me, please send a message to <a href="mailto:hello@bertomoore.dev">hello@bertomoore.dev</a>.
                </p>
                <p class="lead mb-5">
                  Thank you!
                </p>
                <div class="social-icons">
                  <a class="linkedin-container" href="https://linkedin.com/in/bertomoore">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="github-container" href="https://github.com/bertomoore">
                    <i class="fab fa-github"></i>
                  </a>
                  <a class="mail-container" href="mailto:hello@bertomoore.dev">
                    <i class="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )
    }
}

export default AboutSection