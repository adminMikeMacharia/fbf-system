import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FVCLayout from "@/pages/FVCLayout";
import FVCLanding from "@/pages/FVCLanding";
import FVCVentures from "@/pages/FVCVentures";
import FVCVentureDetail from "@/pages/FVCVentureDetail";
import FVCDashboard from "@/pages/FVCDashboard";
import FVCGovernance from "@/pages/FVCGovernance";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <FVCLayout />
      <Switch>
        <Route path="/" component={FVCLanding} />
        <Route path="/ventures" component={FVCVentures} />
        <Route path="/ventures/:id" component={FVCVentureDetail} />
        <Route path="/dashboard" component={FVCDashboard} />
        <Route path="/governance" component={FVCGovernance} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={baseUrl}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
