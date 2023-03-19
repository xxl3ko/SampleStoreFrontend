import WaveSurfer from "wavesurfer.js";

export const Test = () => {

    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
    });

    console.log(wavesurfer)

    wavesurfer.load('/media/Demo.wav');

    return (
        <div id="waveform"></div>
    )

}

