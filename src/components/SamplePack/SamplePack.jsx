import React, {useEffect, useState} from "react";
import css from './SamplePack.module.css'
import axios from "axios";


const SamplePack = () => {
    const [ura, setUra] = useState([])

    useEffect(() => {
            axios
                .get('http://127.0.0.1:8000/api/sample_pack')
                .then(response => {
                    setUra(response.data);
                })
        }, []
    )

    return (
        <div>
            {ura.map(sample_pack => {
                return (
                    <img src={sample_pack.cover_src}></img>
                )
            })
            }
        </div>
    )
}

export default SamplePack