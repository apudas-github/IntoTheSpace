import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { ArrowLeft, Info, AlertTriangle } from 'lucide-react';

export default function ExperimentDetails() {
  const { id } = useParams<{ id: string }>();
  const [exp, setExp] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.getExperiment(id)
        .then(setExp)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (!exp) return <div className="p-20 text-center text-red-400">Experiment not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/explore" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Explorer
      </Link>

      <div className="glass-panel p-8 mb-8 border-t-4 border-t-accent">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-1 bg-primary/20 text-primary text-xs font-bold rounded uppercase tracking-wider">
                {exp.category}
              </span>
              {exp.source_type === "DEMO" && (
                <span className="px-2.5 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded uppercase tracking-wider flex items-center border border-red-500/30">
                  <AlertTriangle className="w-3 h-3 mr-1" /> DEMO DATA
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{exp.title}</h1>
            <p className="text-lg text-gray-300">{exp.description}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">Experimental Conditions</h3>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div>
              <dt className="text-sm text-gray-400">Fuel</dt>
              <dd className="text-lg font-medium">{exp.fuel}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Gravity</dt>
              <dd className="text-lg font-medium text-secondary">{exp.gravity}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Oxygen Concentration</dt>
              <dd className="text-lg font-medium">{exp.oxygen_concentration}%</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Pressure</dt>
              <dd className="text-lg font-medium">{exp.pressure} atm</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Temperature</dt>
              <dd className="text-lg font-medium">{exp.temperature} K</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Flame Type</dt>
              <dd className="text-lg font-medium">{exp.flame_type}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-6 bg-gradient-to-br from-card to-card/50">
            <h3 className="text-xl font-semibold mb-3 flex items-center text-accent">
              <Info className="w-5 h-5 mr-2" /> Observed Behavior
            </h3>
            <p className="text-gray-300 leading-relaxed">{exp.observed_behavior}</p>
          </div>

          <div className="glass-panel p-6 border-l-4 border-l-primary">
            <h3 className="text-xl font-semibold mb-3">Research Findings</h3>
            <p className="text-gray-300 leading-relaxed">{exp.research_findings}</p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 bg-black/40">
        <h3 className="text-lg font-semibold mb-3">Source Information</h3>
        <p className="text-sm text-gray-400 mb-2">
          {exp.source_type === "DEMO" 
            ? "This record is part of the demonstration dataset and should be replaced with verified NASA sources."
            : "Data sourced from NASA Open Data Portals / Research publications."}
        </p>
        <div className="text-sm">
          <span className="font-medium text-white">Title:</span> {exp.source_title}
        </div>
      </div>
    </div>
  );
}
