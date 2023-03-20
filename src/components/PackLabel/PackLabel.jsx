import css from './PackLabel.module.css'

import {useSelector} from "react-redux";

export const PackLabel = () => {

    const state = useSelector(state => state.pack.pack.label)

    return (
        <div className={css.label}>
            by: {'sfdf'}
        </div>
    )
}