import Home from "@/pages/Home";
import Page404 from "@/pages/Page404";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>App</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
