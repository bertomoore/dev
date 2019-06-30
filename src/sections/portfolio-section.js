import React from 'react';
import PageSection from '../components/section';
import ResumeCard from '../components/resume-card';

class PortfolioSection extends React.PureComponent {
    render() {
        return (
          <PageSection header='Portfolio'
            content={(
              <div>

                <ResumeCard 
                  url='bertomoore.dev'
                  icons={['bootstrap','gulp','react','sass']}
                  description={
                    `A website holding samples of my work as well as my contact information.
                    Resume portion of bertomoore.dev.`
                  }
                  copyright='Berto Moore MIT' 
                />

                <ResumeCard
                  url='teamtafoya.com'
                  icons={['bootstrap','css3','javascript','python']}
                  description={
                    `A Django-powered web app to manage properties for Tafoya Team LLC.
                    Website tasks include serving views based on availability,
                    application requests for available properties,
                    tenant portal page to place service requests,
                    and a custom admin page to manage all activity.`
                  }
                  copyright='Tafoya Team LLC Proprietary'
                />
              
              </div>
            )} />
        )
    }
}

export default PortfolioSection