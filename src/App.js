import './App.css';
import {Route, Switch} from "react-router-dom";
import {Welcome} from "./pages/Welcome/Welcome";
import {SamplePacks} from "./pages/SamplePacks/SamplePacks";
import {SamplePack} from "./pages/SamplePack/SamplePack";
import {Header} from "./components/Header/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/welcome'>
                    <Welcome/>
                </Route>
                <Route path='/Packs' exact>
                    <SamplePacks/>
                </Route>
                <Route path='/Packs/:packId'>
                    <SamplePack/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
