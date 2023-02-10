import React from "react";
import axios from "axios";

const Sample = () => {
    axios.get('http://127.0.0.1:8000/api/sample').then(response => {
        console.log()
    })

    return <div>Oleg</div>
}

export default Sample