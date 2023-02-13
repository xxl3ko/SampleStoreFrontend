import React, {useEffect, useState} from "react";
import css from './SamplePack.module.css'
import {GetSamplePack} from "../../api/api";


const SamplePack = () => {
    const [ura, setUra] = useState([])

    useEffect(() => {
        GetSamplePack().then(response => {
            setUra(response.data);
        })
    }, [])

    return <div className={SamplePack}>
        {ura.map(sample_pack => <img src={sample_pack.cover_src}></img>)}
    </div>
}

export default SamplePack