import React, {useState} from "react";
import axios from "axios";


const Sample = () => {
    const [ura, setUra] = useState([])

    axios
        .get('http://127.0.0.1:8000/api/sample')
        .then(data => {
            setUra(data.data);
        })

    return (
        <div>
            {ura.map(sample => {
                return (
                    <div>
                        {sample.title}
                    </div>
                )
            })
            }
        </div>
    )
}

export default Sample