import React from "react";
import css from './PackCard.module.css'
import {Link} from "react-router-dom";

export const PackCard = (props) => {

    return (
        <div className={css.packCard} key={props.pack.id}>
            <Link to={`/packs/${props.pack.id}`}>
                <div className={css.cover}>
                    <img src={props.pack.cover_src} alt=""></img>
                </div>
                <div>
                    {props.pack.title}
                </div>
                <div>
                    LABEL
                </div>
            </Link>
        </div>
    )
}