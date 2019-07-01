import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.links = this.props.navLinks
      .map((navLink) => { return (
        <li className="nav-item" key={navLink}>
          <a className="nav-link js-scroll-trigger" href={'#'+navLink.toLowerCase()}>{navLink}</a>
        </li>
      )});
  }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Berto Moore</span>
              </a>
              <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {this.links}
                </ul>
              </div>
            </nav>
        )
    }
}

export default NavBar