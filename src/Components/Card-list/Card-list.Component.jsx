import React from "react";
import './Card-list.Styles.css';
import {Card} from '../Card/Card.Component';


export const CardList = props => {
    return (<div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}></Card>
        ))}
    </div>);
}