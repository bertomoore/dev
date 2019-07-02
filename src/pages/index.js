import React from "react";
import NavBar from "../components/nav-bar";
import HomeSection from "../sections/home-section";
import AboutSection from "../sections/about-section";
import PortfolioSection from "../sections/portfolio-section";
import EducationSection from "../sections/education-section";

const links = [
    "Portfolio",
    "Education",
    "About"
]

class PageView extends React.PureComponent {
    
    render() {
        return (
            <div>

                <NavBar navLinks={links} />

                <HomeSection />
                
                <PortfolioSection />

                <EducationSection />

                <AboutSection />

            </div>
        )
    }

}

export default () => <PageView />