import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Flame, Database, Beaker, FileText } from 'lucide-react';
import { api } from '../services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  
  useEffect(() => {
    api.getStats().then(setStats).catch(console.error);
  }, []);

  const chartData = [
    { name: 'Methane', count: 4 },
    { name: 'Propane', count: 3 },
    { name: 'Hydrogen', count: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-500 to-primary mb-6">
          Understanding Fire in Space
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore microgravity combustion research and discover fire-safety insights for future human space missions.
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/explore" className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition flex items-center">
            Explore Research <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/research" className="glass-panel hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition flex items-center">
            Ask AI <Search className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <StatCard icon={<Database />} label="Research Records" value={stats?.total_documents || '-'} />
        <StatCard icon={<Beaker />} label="Experiments" value={stats?.total_experiments || '-'} />
        <StatCard icon={<Flame />} label="Fuels" value={stats?.fuels || '-'} />
        <StatCard icon={<FileText />} label="Sources" value={stats?.sources || '-'} />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-6">Experiments by Fuel</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: '#151b2b', borderColor: '#333' }} />
                <Bar dataKey="count" fill="#F97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-4">Featured Fire-Safety Insights</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-white/5 rounded-lg border border-white/10 border-l-4 border-l-accent">
              <strong className="block text-accent mb-1">Flame Stability</strong>
              Spherical flames in microgravity are highly stable compared to normal gravity.
            </li>
            <li className="p-4 bg-white/5 rounded-lg border border-white/10 border-l-4 border-l-primary">
              <strong className="block text-primary mb-1">Oxygen Sensitivity</strong>
              Microgravity flames exhibit altered extinction limits with varying oxygen concentration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  return (
    <div className="glass-panel p-6 flex flex-col items-center text-center">
      <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
