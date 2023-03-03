import './App.css';
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Welcome} from "./pages/Welcome/Welcome";
import {Packs} from "./pages/Packs/Packs";
import {Pack} from "./pages/Pack/Pack";
import {Layout} from "./layouts/Layout";
import {Auth} from "./pages/Auth/Auth";


function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/welcome'>
                        <Welcome/>
                    </Route>
                    <Route path='/packs' exact>
                        <Packs/>
                    </Route>
                    <Route path='/packs/:packId'>
                        <Pack/>
                    </Route>
                    <Route path='/auth'>
                        <Auth/>
                    </Route>
                </Switch>
            </Layout>
        </div>
    )
}

export default App;
