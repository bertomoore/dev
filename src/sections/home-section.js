import React from 'react';
import Icon from '../components/icon';
import Section from '../components/section';

class HomeSection extends React.PureComponent {
  render() {
    return (
      <Section header='Home'
        content={(
          <div className="w-100 text-center  mb-5 mb-lg-0 pb-5 pb-lg-0">
            <h1>
              <span className="text-primary">Berto Moore</span>
            </h1>
            <div className="subheading mt-1">Software Developer.</div>
            <div className="subheading">Web Designer.</div>
            <div className="subheading mb-4">Communicator.</div>
            <div className="mt-2 social-icons">
              <a className="mail-container" href="mailto:bertomoorecode@gmail.com">
                <Icon name="email" />
              </a>
              <a className="github-container" href="https://github.com/bertomoore">
                <Icon name="github" />
              </a>
              <a className="linkedin-container" href="https://linkedin.com/in/bertomoore">
                <Icon name="linkedin" />
              </a>
            </div>
          </div>
        )}
      />
    )
  }
}

export default HomeSection