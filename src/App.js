import './App.css';
import Header from "./components/Header/Header";
import SamplePack from "./components/SamplePack/SamplePack";
import Sample from "./components/Sample/Sample";
import Player from "./components/Player/Player";



function App() {
    return (
        <div className="App">
            <Header/>
            <SamplePack/>
            <Sample />
            <Player/>
        </div>
    )
}

export default App;
