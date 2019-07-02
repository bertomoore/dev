import React from 'react';
import PageSection from '../components/section';
import ResumeCard from '../components/resume-card';

class PortfolioSection extends React.PureComponent {
    render() {
        return (
          <PageSection header='Portfolio'
            content={(
              <div className="w-100 pt-1">


                <ResumeCard 

                  title='BertoMoore.dev'

                  icons={['bootstrap','react','sass']}

                  description={
                    `A website holding samples of my work as well as my contact information.
                    Resume portion of bertomoore.dev. Created using a bootstrap theme that was 
                    gradually integrated to a Gatsby/React environment.`
                  }

                  copyright='Berto Moore MIT&nbsp;License' 

                  source='https://github.com/bertomoore/dev'

                />


                <ResumeCard 

                  title='Team Tafoya'

                  url={null}

                  icons={['bootstrap','css3','javascript','python']}

                  description={
                    `A Django-powered web app to manage properties for Tafoya Team LLC.
                    Website tasks include serving views based on availability,
                    application requests for available properties,
                    tenant portal page to place service requests,
                    and a custom admin page to manage all activity.`
                  }

                  copyright='Tafoya Team LLC'

                  source={null}

                />

                <ResumeCard

                  title='Phone Comparison'

                  url='https://bertomoore.github.io' 

                  icons={['css3','javascript']} 

                  description={
                    `A prototype desktop app used to improve the process of comparing cell phones.
                    Created due to a lack of resource at previous job with customer input along the way.
                    Developed with no CSS/JS frameworks. Illustrative only; does not have full functionality.`
                  } 

                  copyright='Berto Moore MIT&nbsp;License'

                  source="https://github.com/bertomoore/bertomoore.github.io"

                />

                <ResumeCard 

                  title='Sara Jenkins Art'

                  url='http://sarajenkinsart.com' 

                  live={true}

                  icons={['css3','javascript']}

                  description={
                    `A website made to hold artwork made by UNM graduate, Sara Jenkins. 
                    Designed to be compatible will all major browsers including Internet Explorer 9`
                  }

                  copyright='Berto Moore MIT&nbsp;License'

                  source='https://github.com/sarajenkinsart/sarajenkinsart.github.io'
                  
                />
              
              </div>
            )} />
        )
    }
}

export default PortfolioSection