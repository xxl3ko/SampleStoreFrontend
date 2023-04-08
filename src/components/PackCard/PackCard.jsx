import React from "react";
import css from './PackCard.module.css'
import {Link} from "react-router-dom";

export const PackCard = (props) => {

    return (
        <div className={css.packCard} key={props.pack.id}>
            <Link to={`/packs/${props.pack.id}`}>
                <div className={css.cover}>
                    <img src={props.pack.cover} alt=""></img>
                </div>
                <div className={css.name}>
                    {props.pack.name}
                </div>
                <div className={css.label}>
                    {props.pack.label.name}
                </div>
            </Link>
        </div>
    )
}