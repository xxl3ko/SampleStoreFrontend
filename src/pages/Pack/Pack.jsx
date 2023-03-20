import React, {useEffect} from 'react'
import css from './Pack.module.css'
import {useParams} from "react-router-dom";
import {Samples} from "../../components/Samples/Samples";
import {PackHeader} from "../../components/PackHeader/PackHeader";
import {useDispatch, useSelector} from "react-redux";
import {getPack} from "../../store/Actions/packsActions";

export const Pack = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const state = useSelector(state => state.pack.pack)



    useEffect(() => {
        dispatch(getPack(params.packId))
    }, [params.packId, dispatch])

    console.log(state)
    /*
    <Samples/>
            */

    return (
        <div className={css.container}>
            trtrt
            <PackHeader/>
        </div>
    )
}
