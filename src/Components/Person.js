import React from 'react';
import {PopupCard} from './PopupCard';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            isCardOpen: false,
            type: this.props.type
        }
    }
    get fullName() {
        return `${this.state.item.fullName}`;
    }
    get birthDateStr(){
        return (new Date(this.state.item.birthDate)).toLocaleString('ru-RU', {day: 'numeric', month: 'long'});
    }
    get age() {
        let difference = new Date() - new Date(this.state.item.birthDate);
        let diffdays = difference / 1000 / (60 * 60 * 24);
        return Math.floor(diffdays / 365.25);
    }
    openCard = () => {
        if (this.state.isCardOpen === false) {
            this.setState({ isCardOpen: true })
        }
    }
    closeCard = () => {
        this.setState({ isCardOpen: false })
    }

    render() {
        let card = this.state.isCardOpen ? 
                        <PopupCard isCardOpen={this.state.isCardOpen} onClose={this.closeCard} age={this.age} birthDate={this.birthDateStr} item={this.state.item} type={this.state.type} />
                        : '';
        let university = this.state.type === "student" ? 
                        <p className="persons__university" title={`${this.state.item.university} ${this.state.item.course} курс`}>{this.state.item.university} {this.state.item.course} курс</p>
                        : <p className="persons__university" title={`${this.state.item.university} преподаватель`}>{this.state.item.university} преподаватель</p>;
        return (
            <div className="persons__item">
                <div onClick={this.openCard}>
                    <img className="persons__photo" alt={`Аватар ${this.state.item.photoUrl}`} src={`${this.state.item.photoUrl}`} />
                    <p className="persons__fio" title={`${this.state.item.fullName || ''}`}>{this.state.item.fullName}</p>
                    {university}
                    {card}
                </div>
            </div>
        )
    }
}

export{Person};