import WaveSurfer from "wavesurfer.js";
import {useEffect} from "react";

export const Waveform = (props) => {

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: `#waveform-${props.id}`,
            //waveColor: 'red',
            progressColor: 'blue',
            maxCanvasWidth: 100,
            height: 32,
            barGap: 1,
            barWidth: 2,
            barRadius: 1,
            cursorWidth: 0,
            hideScrollbar: true,
        });

        wavesurfer.load(props.src);
    },[props.id])


    return (
        <div id={`waveform-${props.id}`}></div>
    )

}

