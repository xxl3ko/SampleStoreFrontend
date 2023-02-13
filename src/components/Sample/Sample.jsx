import React, {useEffect, useState} from "react";
import css from "./Sample.module.css"
import axios from "axios";
import {useDispatch} from "react-redux";


const Sample = () => {
    const [ura, setUra] = useState([])

    useEffect(() => {
            axios
                .get('http://127.0.0.1:8000/api/sample')
                .then(data => {
                    setUra(data.data);
                })
        }, []
    )

    const dispatch = useDispatch()
    const post_player = (oleg) => dispatch({
        type: "SET_PLAYER_SRC", payload: {
            src: oleg
        }
    })

return (
    <div className={css.sample_board}>
        {ura.map(sample => {
            return (
                <div className={css.sample} onClick={() => post_player(sample.file_src)}>
                    {sample.title}
                </div>
            )
        })
        }
    </div>
)
}

export default Sample