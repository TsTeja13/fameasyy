import { useState } from 'react';

export default function Schemes() {
  const [landSize, setLandSize] = useState('');
  const [calculatedAid, setCalculatedAid] = useState(null);

  const schemes = [
    { title: "PM-KISAN Samman Nidhi", fund: "₹6,000 / Year", desc: "Direct cash benefit distributed in 3 equal installments directly into organic farmers' bank accounts.", eligible: "All small and marginal landholding farmer families." },
    { title: "Paramparagat Krishi Vikas Yojana (PKVY)", fund: "₹50,000 / Hectare", desc: "Financial assistance provided for cluster creation, organic seed inputs, certification, and localized marketing support.", eligible: "Farmers transitioning from chemical farming to organic methods." },
    { title: "National Mission on Natural Farming (NMNF)", fund: "Up to ₹15,000 subsidy", desc: "Exclusive grants offered for establishing on-farm bio-input production labs (cow dung/urine formulations).", eligible: "Individual smallholders practicing complete natural farming." }
  ];

  const calculateSubsidy = (e) => {
    e.preventDefault();
    const acres = parseFloat(landSize) || 0;
    setCalculatedAid(acres * 20000); // Simulated baseline calculation rule
  };

  return (
    <div>
      <div className="header">
        <h1>📜 Govt Schemes & Funds</h1>
        <p>Official Agricultural Financial Support</p>
      </div>

      <div className="container">
        {/* Additional Feature: Aid Calculator */}
        <div className="card" style={{background: '#e8f5e9'}}>
          <h3>🧮 Subsidy & Support Estimator</h3>
          <p style={{fontSize: '13px', color: '#555', marginBottom: '10px'}}>Input your farm plot size to check approximate central funding allocation eligibility.</p>
          <form onSubmit={calculateSubsidy} style={{display: 'flex', gap: '10px'}}>
            <input 
              type="number" 
              placeholder="Enter Land Size (in Acres)" 
              value={landSize}
              onChange={(e) => setLandSize(e.target.value)}
              style={{flexGrow: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc'}}
              required
            />
            <button type="submit" className="btn" style={{width: 'auto', margin: 0}}>Estimate</button>
          </form>
          {calculatedAid !== null && (
            <p style={{marginTop: '10px', fontWeight: 'bold', color: '#2e7d32'}}>💰 Estimated Potential Support: ₹{calculatedAid.toLocaleString()}</p>
          )}
        </div>

        {schemes.map((s, idx) => (
          <div className="card" key={idx}>
            <span className="badge">{s.fund}</span>
            <h2>{s.title}</h2>
            <p style={{fontSize: '14px', margin: '8px 0', color: '#444'}}>{s.desc}</p>
            <p style={{fontSize: '13px', color: '#666'}}><strong>Who qualifies:</strong> {s.eligible}</p>
            <button className="btn" onClick={() => alert(`Redirecting to secure official state agriculture portal for ${s.title}...`)}>Apply Now Online</button>
          </div>
        ))}
      </div>
    </div>
  );
}
