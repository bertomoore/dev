import React from 'react';

class PageSection extends React.PureComponent {
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="portfolio">
              <div class="w-100">
                <h2 class="mb-5">{this.props.header}</h2>
                {this.props.content}
              </div>
            </section>
        )
    }
}

export default PageSection