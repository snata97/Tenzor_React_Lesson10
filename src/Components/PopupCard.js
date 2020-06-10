import React from 'react';

function PopupCard(props) {
    return (
        <div className="card">
            <span className="close" onClick={props.onClose}></span>
            <div class="card__body">
                <div className="card__info" >
                    <p className="card__title" title={props.item.fullName}>{props.item.fullName}</p>
                    <div className="card__text">
                        <div className="card__text__item">
                            <span className="card__text--grey card__text--left">День рождения</span>
                            <span className="card__date">{props.birthDate}, {props.age} лет</span>
                        </div>
                        <div className="card__text__item">
                            <span className="card__text--grey card__text--left card__status">{props.type === "student" ? "Учится" : "Работает"}</span>
                            <span className="card__univercity">{props.item.university}</span>
                        </div>
                    </div>
                </div>
                <img className="card__img" src={`${props.item.photoUrl}`} alt="Аватар"/>
            </div>
        </div>
    )
}

export {PopupCard};