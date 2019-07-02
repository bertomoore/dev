import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarCollapse: false,
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.hideCollapse = this.hideCollapse.bind(this);
    this.links = this.props.navLinks
      .map((navLink) => { return (
        <li className="nav-item" key={navLink}>
          <a className="nav-link" href={'#'+navLink.toLowerCase()} onClick={this.hideCollapse}>{navLink}</a>
        </li>
      )});
  }

  hideCollapse() {
    this.setState(state => ({
      navBarCollapse: false
    }));
  }

  toggleCollapse() {
    this.setState(state => ({
      navBarCollapse: !state.navBarCollapse
    }));
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand" href="#page-top" onClick={this.hideCollapse}>
          <span className="d-block">Berto</span>
        </a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"navbar-collapse " + (this.state.navBarCollapse ? "show" : "hide")} id="navbarSupportedContent">
          <ul className="navbar-nav">
            {this.links}
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar