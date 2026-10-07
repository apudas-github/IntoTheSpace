// Use VITE_API_URL for production, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const api = {
  getStats: async () => {
    const res = await fetch(`${API_URL}/stats`);
    return res.json();
  },
  getExperiments: async () => {
    const res = await fetch(`${API_URL}/experiments`);
    return res.json();
  },
  getExperiment: async (id: string) => {
    const res = await fetch(`${API_URL}/experiments/${id}`);
    if (!res.ok) throw new Error("Not found");
    return res.json();
  },
  search: async (q: string) => {
    const res = await fetch(`${API_URL}/search?q=${encodeURIComponent(q)}`);
    return res.json();
  },
  chat: async (message: string) => {
    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    return res.json();
  },
  compare: async (ids: string[]) => {
    const res = await fetch(`${API_URL}/compare`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ experiment_ids: ids })
    });
    return res.json();
  },
  getInsights: async () => {
    const res = await fetch(`${API_URL}/insights`);
    return res.json();
  }
};
