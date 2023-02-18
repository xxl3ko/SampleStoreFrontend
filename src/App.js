import './App.css';
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Welcome} from "./pages/Welcome/Welcome";
import {Packs} from "./pages/Packs/Packs";
import {Pack} from "./pages/Pack/Pack";
import {Layout} from "./layouts/Layout";


function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/welcome'>
                        <Welcome/>
                    </Route>
                    <Route path='/Packs' exact>
                        <Packs/>
                    </Route>
                    <Route path='/Packs/:packId'>
                        <Pack/>
                    </Route>
                </Switch>
            </Layout>
        </div>
    )
}

export default App;
