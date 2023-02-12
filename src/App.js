import './App.css';
import Header from "./components/Header/Header";
import Sample from "./components/Sample/Sample";
import SamplePack from "./components/SamplePack/SamplePack";


function App() {
    return (
        <div className="App">
            <Header/>
            <SamplePack/>
            <Sample/>
        </div>
    )
}

export default App;
