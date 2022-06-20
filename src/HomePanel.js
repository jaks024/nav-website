import React from 'react';
import TextBlock from './TextBlock';
import'./HomePanelStyle.css';
import ContactBar from './ContactBar';
class HomePanel extends React.Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <div className={`home-panel-content ${this.props.classStyle}`}>
                <div className="home-panel-content-offset">
                    <TextBlock text={"Navanith Niranjan"}
                    styleClass={"home-panel-main-text"}/>
                    <TextBlock text={"I am a mech eng student"}
                    styleClass={"home-panel-changing-text"}/>
                    <TextBlock text={"I have an black and white image and i just need the inverse(black instead white and white instead of black) of that image. i know that it can be done with image editors,is there any possibility to deal it with css? is there any css property is available to invert an black and white image?"}
                    styleClass={"home-panel-sub-text"}/>
                    <div className="home-panel-contact-wrapper">
                        <ContactBar/>
                        <div className="home-panel-contact-block">
                        <TextBlock text={"n4niranj@uwaterloo.ca"}
                        styleClass={"home-panel-contact-text"}/>
                        <TextBlock text={"+1 (437) 777-5596"}
                        styleClass={"home-panel-contact-text"}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePanel;