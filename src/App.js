import Home from "@/pages/Home";
import Item from "@/pages/Item";
import Map from "@/pages/Map";
import Monster from "@/pages/Monster";

import Page404 from "@/pages/Page404";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>App</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/item/:title" component={Item} />
          <Route path="/map/:title" component={Map} />
          <Route path="/monster/:title" component={Monster} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
