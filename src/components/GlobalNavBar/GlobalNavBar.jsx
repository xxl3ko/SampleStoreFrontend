import css from './GlobalNavBar.module.css'
import {NavLink} from "react-router-dom";

export const GlobalNavBar = () => {
    return (
        <div className={css.navbar}>
            <div className={css.item}>
                <NavLink to="/">Welcome</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/packs">Packs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/plugins">Plugins</NavLink>
            </div>
        </div>
    )
}
