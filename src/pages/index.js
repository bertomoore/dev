import React from "react";
import NavBar from "../components/nav-bar";
import AboutSection from "../sections/about-section";
import PortfolioSection from "../sections/portfolio-section";

class PageView extends React.PureComponent {
    
    render() {
        return (
            <div>
                <NavBar navLinks={
                    [
                        "About",
                        "Portfolio",
                        "Education",
                        "Skills",
                        "Interests",
                        "Awards"
                    ]} />

                <AboutSection />
                
                <PortfolioSection />


            </div>
        )
    }
}

export default () => <PageView />
