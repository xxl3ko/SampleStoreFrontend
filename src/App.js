import './App.css';
import Header from "./components/Header/Header";
import Sample from "./components/Sample/Sample";
import axios from "axios";

axios.get('http://127.0.0.1:8000/api/sample')

function App() {
    return (
        <div className="App">
            <Header/>
            <Sample/>
        </div>
    )
}

export default App;
