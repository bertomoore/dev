import React from 'react';
import Icon from './icon';

class ResumeCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.icons = this.props.icons
      .map((icon) => <Icon name={icon} key={icon} />);
    this.header = this.props.url 
      ? <a href={this.props.url}>{this.props.title}</a> : this.props.title;
  }

  render() {
    return (
      <div className="resume-item mb-5 my-lg-3 col-12 col-lg-6">
        <div className="resume-content card">
          <h3 className="mb-0">{this.header}</h3>
          <div className="subheading">{this.icons}</div>
          <hr />
          <p>{this.props.description}</p>
          <hr />
          <em>Copyright &copy; {this.props.copyright}</em>
        </div>
      </div>
    )
  }
}

export default ResumeCard