import MainLayout from "@{view}/layouts/Main";

import PageHome from "@{view}/pages/home/Index";
import PageItem from "@{view}/pages/item/Index";
import PageMap from "@{view}/pages/map/Index";
import PageMonster from "@{view}/pages/monster/Index";
import PageWeapon from "@{view}/pages/weapon/Index";

import Error404 from "@{view}/errors/Error404";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/item/:title" component={PageItem} />
          <Route path="/map/:title" component={PageMap} />
          <Route path="/monster/:name" component={PageMonster} />
          <Route path="/weapon/:title" component={PageWeapon} />
          <Route path="*" component={Error404} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
