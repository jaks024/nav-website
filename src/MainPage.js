import React from 'react';
import NavBar from './NavBar';
import HomePanel from './HomePanel';
import './MainPageStyle.css';
import ProjectPage from './ProjectPage';
class MainPage extends React.Component 
{

    constructor(props) {
        super(props);

        this.state = {
            showProject: false
        };
    }

    hideProjectPage() {
        alert(this.state.showProject);
        this.setState({
            showProject: false
        });
        
    }

    showProjectPage() {
        alert(this.state.showProject + " ");
        this.setState({
            showProject: true
        });
        
    }
 
    render()
    {
        return (
            <div className="main-page-content">
                <NavBar onShowProject={this.showProjectPage}
                    onHideProject={this.hideProjectPage}/>
                <HomePanel classStyle={this.state.showProject ? "home-disabled" : ""}/>
                <ProjectPage classStyle={this.state.showProject ? "" : "project-disabled"}/>
                <div className="background"></div>
            </div>
        );
    }
}   

export default MainPage;