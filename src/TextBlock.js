import React from 'react';
import "./TextBlockStyle.css";

class TextBlock extends React.Component {

    render() 
    {
        return (
            <div className={`${this.props.styleClass} textblock-default`}>
                {this.props.text}
            </div>
        );

    }
}

export default TextBlock;