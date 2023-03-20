import css from './PackLabel.module.css'
import {getLabel} from "../../store/Actions/labelsActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const PackLabel = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.label)

    useEffect(() => {
        dispatch(getLabel(1))
    }, [dispatch])

    console.log(state)

    return (
        <div className={css.label}>
            by: {state.label.title}
        </div>
    )
}