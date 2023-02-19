import React from 'react'
import css from './Pack.module.css'
import {useParams} from "react-router-dom";

import {Samples} from "../../components/Samples/Samples";
import {Player} from "../../components/Player/Player";
import {PackHeader} from "../../components/PackHeader/PackHeader";

export const Pack = () => {
    const params = useParams()

    return (
        <div className={css.container}>
            <PackHeader packId={params.packId}/>
            <Samples packId={params.packId}/>
        </div>
    )
}
