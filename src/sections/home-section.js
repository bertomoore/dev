import React from 'react';
import Icon from '../components/icon';
import Section from '../components/section';

class HomeSection extends React.PureComponent {
  render() {
    return (
      <Section header='Home'
        content={(
          <div className="w-100">
            <h1 className="mb-1 text-center">
              <span className="text-primary">Berto Moore</span>
            </h1>
            <div className="subheading mb-5">
              Developer. Designer. Communicator.
            </div>
            <div className="social-icons">
              <a className="linkedin-container" href="https://linkedin.com/in/bertomoore">
                <Icon name="linkedin" />
              </a>
              <a className="github-container" href="https://github.com/bertomoore">
                <Icon name="github" />
              </a>
              <a className="mail-container" href="mailto:hello@bertomoore.dev">
                <Icon name="email" />
              </a>
            </div>
          </div>
        )}
      />
    )
  }
}

export default HomeSection