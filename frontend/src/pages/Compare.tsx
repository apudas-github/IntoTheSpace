import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

export default function Compare() {
  const [experiments, setExperiments] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [comparison, setComparison] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getExperiments().then(setExperiments).catch(console.error);
  }, []);

  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(x => x !== id));
    } else {
      if (selected.length < 3) setSelected([...selected, id]);
    }
  };

  const handleCompare = async () => {
    if (selected.length < 2) return;
    setLoading(true);
    try {
      const res = await api.compare(selected);
      setComparison(res);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Compare Experiments</h1>
      
      {!comparison ? (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Select 2-3 experiments to compare</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {experiments.map(exp => (
                <div 
                  key={exp.id} 
                  onClick={() => toggleSelect(exp.id)}
                  className={`glass-panel p-4 cursor-pointer transition border ${selected.includes(exp.id) ? 'border-primary bg-primary/10' : 'border-white/10 hover:border-white/30'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{exp.fuel} | {exp.gravity}</p>
                    </div>
                    {selected.includes(exp.id) && <CheckCircle className="text-primary w-5 h-5" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-panel p-8 flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">{selected.length}</span>
              <span className="text-xl text-gray-400 ml-2">selected</span>
            </div>
            
            <button 
              onClick={handleCompare}
              disabled={selected.length < 2 || loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? 'Analyzing...' : 'Generate Comparison'} <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            {selected.length < 2 && (
              <p className="text-sm text-gray-400 mt-4 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" /> Please select at least two experiments.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Comparison Results</h2>
            <button onClick={() => setComparison(null)} className="text-sm text-primary hover:underline">
              New Comparison
            </button>
          </div>
          
          <div className="glass-panel p-6 border-l-4 border-l-accent bg-accent/5">
            <h3 className="text-lg font-semibold mb-2">AI Summary</h3>
            <p className="text-gray-200">{comparison.summary}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-white/10 bg-card font-semibold text-gray-400">Parameter</th>
                  {comparison.experiments.map((exp: any) => (
                    <th key={exp.id} className="p-4 border-b border-white/10 bg-card font-bold text-white w-[30%]">
                      {exp.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4 font-medium text-gray-400">Fuel</td>
                  {comparison.experiments.map((exp: any) => <td key={exp.id} className="p-4">{exp.fuel}</td>)}
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4 font-medium text-gray-400">Gravity</td>
                  {comparison.experiments.map((exp: any) => <td key={exp.id} className="p-4">{exp.gravity}</td>)}
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4 font-medium text-gray-400">Oxygen %</td>
                  {comparison.experiments.map((exp: any) => <td key={exp.id} className="p-4">{exp.oxygen_concentration}</td>)}
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4 font-medium text-gray-400">Flame Type</td>
                  {comparison.experiments.map((exp: any) => <td key={exp.id} className="p-4">{exp.flame_type}</td>)}
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-4 font-medium text-gray-400">Observed Behavior</td>
                  {comparison.experiments.map((exp: any) => <td key={exp.id} className="p-4 text-sm text-gray-300">{exp.observed_behavior}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
