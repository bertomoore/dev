import React from 'react';
import Section from '../components/section';

class AboutSection extends React.PureComponent {
    render() {
        return (
          <Section header="About"
            content={(
              <div className="p-4 m-3 card">
                <hr />
                <p className="lead mb-3 p-2">
                  Hello, I'm a software developer and web designer residing in Albuquerque, New Mexico.
                  I have over two years of experience in building websites, including user researching, 
                  wireframing, front-end programming, database management, QA testing, and more.
                </p>
                <p className="lead mb-3 p-2">
                  I also have experience in customer service and tech support, providing me a firsthand glimpse into 
                  the importance of communication.
                </p>
                <p className="lead mb-3 p-2">
                  If you'd like to get a quote on a project or learn more, 
                  please send a message to <a href="mailto:berto@bertomoore.dev">berto@bertomoore.dev</a>.
                </p>
                <p className="lead mb-3 p-2">
                  Thank you!
                </p>
                <hr />
              </div>
            )}
          />
        )
    }
}

export default AboutSection