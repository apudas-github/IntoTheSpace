import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Search, Filter, AlertCircle } from 'lucide-react';

export default function Explorer() {
  const [query, setQuery] = useState("");
  const [experiments, setExperiments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiments();
  }, []);

  const fetchExperiments = async () => {
    setLoading(true);
    try {
      const data = await api.getExperiments();
      setExperiments(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (query.trim()) {
        const res = await api.search(query);
        setExperiments(res.experiments);
      } else {
        fetchExperiments();
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Research Explorer</h1>
        
        <form onSubmit={handleSearch} className="flex w-full md:w-auto relative">
          <input
            type="text"
            placeholder="Search experiments by fuel, type..."
            className="w-full md:w-80 pl-10 pr-4 py-2 rounded-l-lg bg-card border border-white/10 focus:outline-none focus:border-primary transition"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <button type="submit" className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-r-lg font-medium transition">
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 glass-panel p-5 h-fit">
          <div className="flex items-center mb-4 text-lg font-semibold">
            <Filter className="w-5 h-5 mr-2" /> Filters
          </div>
          <div className="text-sm text-gray-400 mb-4">
            (Filter UI placeholder - Backend supports full filtering in production)
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Gravity Condition</label>
              <select className="w-full bg-background border border-white/10 rounded p-2 text-sm focus:outline-none">
                <option>All</option>
                <option>Microgravity</option>
                <option>Normal Gravity</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Fuel</label>
              <select className="w-full bg-background border border-white/10 rounded p-2 text-sm focus:outline-none">
                <option>All</option>
                <option>Methane</option>
                <option>Propane</option>
                <option>Hydrogen</option>
              </select>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {loading ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div></div>
          ) : experiments.length > 0 ? (
            <div className="grid gap-4">
              {experiments.map((exp: any) => (
                <Link to={`/experiments/${exp.id}`} key={exp.id} className="glass-panel p-5 hover:border-primary/50 transition cursor-pointer block">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded font-medium border border-secondary/30">
                      {exp.gravity}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="bg-background px-3 py-1.5 rounded-full border border-white/10">
                      Fuel: <span className="font-semibold text-accent">{exp.fuel}</span>
                    </span>
                    <span className="bg-background px-3 py-1.5 rounded-full border border-white/10">
                      Oxygen: <span className="font-semibold">{exp.oxygen_concentration}%</span>
                    </span>
                    <span className="bg-background px-3 py-1.5 rounded-full border border-white/10">
                      Flame Type: <span className="font-semibold">{exp.flame_type}</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="glass-panel p-10 text-center flex flex-col items-center">
              <AlertCircle className="w-12 h-12 text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No experiments found</h3>
              <p className="text-gray-400">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
