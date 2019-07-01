import React from 'react';
import Section from '../components/section';

class AboutSection extends React.PureComponent {
    render() {
        return (
          <Section header="About"
            content={(
              <div className="w-100 p-3 card">
                <p className="lead mb-3 p-2">
                  Hello, I'm a software developer and web designer residing in Albuquerque, New Mexico.
                  I have over two years of experience in various tasks behind building websites,
                  including wireframing, front-end programming, database management, QA testing, and more.
                </p>
                <p className="lead mb-3 p-2">
                  I also have experience in customer service and tech support, providing me a firsthand site
                  of the importance in communication and empathy even in more technical roles.
                </p>
                <p className="lead mb-3 p-2">
                  If you'd like to learn more or get a quote, please send a message to <a href="mailto:hello@bertomoore.dev">hello@bertomoore.dev</a>.
                </p>
                <p className="lead mb-3 p-2">
                  Thank you!
                </p>
              </div>
            )}
          />
        )
    }
}

export default AboutSection