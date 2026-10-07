import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Lightbulb, Info } from 'lucide-react';

export default function Insights() {
  const [insights, setInsights] = useState<any[]>([]);

  useEffect(() => {
    api.getInsights().then(setInsights).catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Fire Safety Insights</h1>
        <p className="text-gray-300 max-w-3xl">
          Actionable intelligence extracted from NASA microgravity combustion research. 
          These insights highlight key differences in flame behavior that impact spacecraft fire safety engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {insights.map((item, i) => (
          <div key={i} className="glass-panel p-6 relative overflow-hidden group hover:border-primary/50 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex items-center">
                <div className="p-2 bg-primary/20 rounded-lg mr-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.category}</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400 mb-1 uppercase font-semibold">Relevance</div>
                <div className="text-lg font-bold text-secondary">{item.relevance}%</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed relative z-10">
              {item.insight}
            </p>
            
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-gray-500 flex items-start relative z-10">
              <Info className="w-4 h-4 mr-1.5 shrink-0" />
              Research suggests these observations based on retrieved experimental data. Not certified engineering risk assessment.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
