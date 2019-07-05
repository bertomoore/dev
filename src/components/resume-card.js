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
      <div className="resume-item mb-5 col-12">
        <div className="resume-content card">
          <hr />
          <h3 className="mb-0">{this.header}</h3>
          <span className="subheading">{this.icons}</span>
          <p>{this.props.description}</p>
          <strong>Copyright &copy; {this.props.copyright}
            {this.props.source && <span>&nbsp;<a href={this.props.source}>(src)</a></span>}
          </strong>
          <hr />
        </div>
      </div>
    )
  }
}

export default ResumeCard