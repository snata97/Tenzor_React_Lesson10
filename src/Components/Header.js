import React from 'react';

class Header extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
            title: props.title || "",
            description: props.description || ""
       };
    }
    render() {
        return(<header className="title">
            <img className="title__logo" src="./img/logo.jpg" alt="Логотип"/>
            <h1 className="title__name" title="{this.state.title}">{this.state.title}</h1>
            <p className="title__body" title="{this.state.description}">{this.state.description}</p>
        </header>);
    }
}

export {Header};
