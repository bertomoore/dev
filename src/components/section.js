import React from 'react';

class PageSection extends React.PureComponent {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id={this.props.header.toLowerCase()}>
              <div className="w-100">
                <h2 className="mb-5">{this.props.header}</h2>
                {this.props.content}
              </div>
            </section>
        )
    }
}

export default PageSection