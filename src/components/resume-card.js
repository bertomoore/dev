import React from 'react';
import Icon from './icon';

class ResumeCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.icons = this.props.icons
      .map((icon) => <Icon name={icon} key={icon} />)
  }

  render() {
    return (
      <div class="resume-item m-lg-2 col-12">
        <div class="resume-content">
          <h3 class="mb-0">{this.props.url}</h3>
          <div class="subheading">{this.icons}</div>
          <hr />
          <p>{this.props.description}</p>
          <hr />
          <em>Copyright &copy; {this.props.copyright}&nbsp;License</em>
        </div>
      </div>
    )
  }
}

export default ResumeCard