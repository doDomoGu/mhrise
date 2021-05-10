import MainLayout from "@/pages/layouts/Main";

import PageHome from "@/pages/Home";
import PageItem from "@/pages/Item";
import PageMap from "@/pages/Map";
import PageMonster from "@/pages/Monster";
import Page404 from "@/pages/Page404";

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
          <Route path="*" component={Page404} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
