import React from "react";
import TextBlock from "./TextBlock";
import './NavBarStyle.css';
class NavBar extends React.Component
{

    onHomeClicked() {
        this.props.onHideProject();
    }

    onProjectsClicked() {
        this.props.onShowProject();
    }

    render()
    {
        return(
            <div className="navbar">
                <div onClick={() => this.onHomeClicked()}>
                    <TextBlock text={"Navanith Niranjan"}
                    styleClass={"navbar-text"}/>
                </div>
                <div onClick={() => this.onProjectsClicked()}>
                    <TextBlock text={"Projects"} 
                    styleClass={"navbar-text"}/>
                </div>
                <TextBlock text={"Resume"}
                styleClass={"navbar-text"}/>
            </div>
        );
    }
    
} 

export default NavBar;