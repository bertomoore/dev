import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.links = this.props.navLinks
      .map((navLink) => { return (
        <li class="nav-item" key={navLink}>
          <a class="nav-link js-scroll-trigger" href={'#'+navLink.toLowerCase()}>{navLink}</a>
        </li>
      )});
  }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Berto Moore</span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  {this.links}
                </ul>
              </div>
            </nav>
        )
    }
}

export default NavBar