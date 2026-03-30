import { Route, Switch, Router as WouterRouter } from "wouter";
import LandingPage from "./pages/LandingPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import TiersPage from "./pages/TiersPage";
import ConfiguratorPage from "./pages/ConfiguratorPage";
import ImpactPage from "./pages/ImpactPage";
import IndustriesPage from "./pages/IndustriesPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/opportunities" component={OpportunitiesPage} />
        <Route path="/tiers" component={TiersPage} />
        <Route path="/configurator" component={ConfiguratorPage} />
        <Route path="/impact" component={ImpactPage} />
        <Route path="/industries" component={IndustriesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">404</h1>
              <p className="text-muted-foreground">Page not found</p>
            </div>
          </div>
        </Route>
      </Switch>
    </WouterRouter>
  );
}
