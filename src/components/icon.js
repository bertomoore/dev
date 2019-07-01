import React from "react"

const iconDictionary = {
    'bootstrap': [
        'Bootstrap',
        'fab fa-bootstrap'
    ],
    'css3': [
        'CSS3',
        'fab fa-css3-alt'
    ],
    'email': [
        'Email',
        'far fa-envelope'
    ],
    'github': [
        'GitHub',
        'fab fa-github'
    ],
    'gulp': [
        'Gulp',
        'fab fa-gulp'
    ],
    'javascript': [
        'JavaScript',
        'fab fa-js-square'
    ],
    'linkedin': [
        'LinkedIn',
        'fab fa-linkedin-in'
    ],
    'python': [
        'Python',
        'fab fa-python'
    ],
    'react': [
        'React',
        'fab fa-react'
    ],
    'sass': [
        'SASS',
        'fab fa-sass'
    ],
    'ubuntu': [
        'Ubuntu',
        'fab fa-ubuntu'
    ],
    'vue': [
        'Vue',
        'fab fa-vuejs'
    ],
}

class Icon extends React.PureComponent {
    constructor(props) {
        super(props)
        this.iconClass = iconDictionary[this.props.name][1];
    }
    render() {
        return (
            <i 
                className={this.iconClass}
                aria-label={this.props.name}
            ></i>
        )
    }
}

export default Icon