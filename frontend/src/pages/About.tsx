import { Rocket, ShieldCheck, Database, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About IntoTheSpace</h1>
        <p className="text-xl text-gray-400">
          NASA Space Apps Challenge 2026 Project
        </p>
      </div>

      <div className="glass-panel p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">The Challenge</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          "Flame in Freefall: AI-Powered Fire Safety Insights from Microgravity Combustion Data"
          <br /><br />
          Understanding how fire behaves in space is critical for ensuring the safety of future human spaceflight missions. However, decades of microgravity combustion research are vast, complex, and difficult to synthesize into actionable safety protocols for spacecraft engineers.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Our Solution</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          IntoTheSpace is an AI-powered scientific intelligence platform. It ingests NASA's open scientific research on combustion and provides an interactive interface for researchers to explore, compare, and extract critical fire-safety insights. By leveraging Retrieval-Augmented Generation (RAG), it anchors all AI summaries in real experimental data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="glass-panel p-6 flex items-start">
          <Database className="w-8 h-8 text-primary mr-4 shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">Data-Driven</h3>
            <p className="text-sm text-gray-400">Built on top of experimental datasets analyzing flame behavior in microgravity versus normal gravity conditions.</p>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-start">
          <ShieldCheck className="w-8 h-8 text-secondary mr-4 shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">Safety Focused</h3>
            <p className="text-sm text-gray-400">Highlights critical parameters like oxygen sensitivity and extinction limits that impact spacecraft design.</p>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-start">
          <Rocket className="w-8 h-8 text-accent mr-4 shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">Mission Ready</h3>
            <p className="text-sm text-gray-400">An interface designed for engineers and researchers planning the next generation of space habitats.</p>
          </div>
        </div>
        <div className="glass-panel p-6 flex items-start">
          <Award className="w-8 h-8 text-yellow-500 mr-4 shrink-0" />
          <div>
            <h3 className="font-bold text-lg mb-2">Hackathon Project</h3>
            <p className="text-sm text-gray-400">Created for the NASA Space Apps Challenge 2026. Disclaimer: Not official NASA software.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
