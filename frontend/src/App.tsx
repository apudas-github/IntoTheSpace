import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Explorer from './pages/Explorer';
import ExperimentDetails from './pages/ExperimentDetails';
import Compare from './pages/Compare';
import AIResearch from './pages/AIResearch';
import Insights from './pages/Insights';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/explore" element={<Explorer />} />
          <Route path="/experiments/:id" element={<ExperimentDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/research" element={<AIResearch />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
