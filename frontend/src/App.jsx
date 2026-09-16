import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Prospects from "./pages/Prospects";
import ProspectDetail from "./pages/ProspectDetail";
import Pipeline from "./pages/Pipeline";
import Relances from "./pages/Relances";
import AssistantIA from "./pages/AssistantIA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="prospects" element={<Prospects />} />
          <Route path="prospects/:id" element={<ProspectDetail />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="relances" element={<Relances />} />
          <Route path="assistant" element={<AssistantIA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;