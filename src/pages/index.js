import React from "react";
import NavBar from "../components/nav-bar";
import HomeSection from "../sections/home-section";
import AboutSection from "../sections/about-section";
import PortfolioSection from "../sections/portfolio-section";
import EducationSection from "../sections/education-section";

class PageView extends React.PureComponent {
    
    render() {
        return (
            <div>

                <NavBar navLinks={
                    [
                        "Home",
                        "About",
                        "Portfolio",
                        "Education"
                    ]} 
                />

                <HomeSection />

                <AboutSection />
                
                <PortfolioSection />

                <EducationSection />

            </div>
        )
    }

}

export default () => <PageView />