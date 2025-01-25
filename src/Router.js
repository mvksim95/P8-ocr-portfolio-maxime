import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './components/Layout'
import ProjectDetail from "./pages/ProjectDetail";
import About from './pages/About'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="*" element={<h2>Page non trouvée</h2>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
