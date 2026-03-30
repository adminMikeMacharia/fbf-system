import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Arena from "./pages/Arena";
import GameMechanics from "./pages/GameMechanics";
import IdeationWall from "./pages/IdeationWall";
import BuildWithUs from "./pages/BuildWithUs";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path={`${BASE}/`} component={Home} />
        <Route path={`${BASE}/arena`} component={Arena} />
        <Route path={`${BASE}/mechanics`} component={GameMechanics} />
        <Route path={`${BASE}/ideation`} component={IdeationWall} />
        <Route path={`${BASE}/build`} component={BuildWithUs} />
        <Route component={Home} />
      </Switch>
    </Layout>
  );
}
