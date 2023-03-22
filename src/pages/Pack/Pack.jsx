import {useEffect} from 'react'
import css from './Pack.module.css'
import {useParams} from "react-router-dom";
import {Samples} from "../../components/Samples/Samples";
import {PackHeader} from "../../components/PackHeader/PackHeader";
import {useDispatch} from "react-redux";
import {getPack} from "../../store/Actions/packsActions";

export const Pack = () => {

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPack(params.packId))
    }, [params.packId, dispatch])

    return (
        <div className={css.container}>
            <PackHeader/>
            <Samples/>
        </div>
    )
}
