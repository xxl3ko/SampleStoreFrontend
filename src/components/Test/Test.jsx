import WaveSurfer from "wavesurfer.js";
import {useEffect} from "react";

export const Test = (src = '/demo.wav') => {
    console.log(src)
    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            barWidth: 4,
        });

        wavesurfer.load('/demo.wav');
    })

    return (
        <div id="waveform"></div>
    )

}

