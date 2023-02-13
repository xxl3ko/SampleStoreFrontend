import React from "react";
import css from './Player.module.css'
import { useSelector} from "react-redux";

const Player = () => {

    //   const dispatch = useDispatch()
    debugger
    const src = useSelector(state => state.src)


    return (
        <div className={css.div}>
            <div>SRC</div>
            <button>DAVAI</button>
            <audio id="audio" src='' controls></audio>
        </div>
    )
}

export default Player