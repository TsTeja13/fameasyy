import { useState } from 'react';

export default function Market() {
  const seeds = [
    { name: "Organic Desi Paddy Seeds", price: "₹450 / 5kg Bag", rating: "⭐ 4.9" },
    { name: "Natural Heirlooms Tomato Seeds", price: "₹120 / Packet", rating: "⭐ 4.7" },
    { name: "Non-GMO Premium Wheat Grain Seeds", price: "₹600 / 10kg Bag", rating: "⭐ 4.8" }
  ];

  const tutorials = [
    { title: "Building a Multi-Layer Composting Pit", duration: "12 Mins", level: "Beginner" },
    { title: "Zero Budget Natural Farming (ZBNF) Basics", duration: "25 Mins", level: "Intermediate" },
    { title: "Managing Pests through Natural Decoctive Oils", duration: "18 Mins", level: "Advanced" }
  ];

  const [posts, setPosts] = useState([
    { user: "Ramesh K.", text: "My crop production increased dramatically after using the sour buttermilk formula on my tomatoes!" }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if(!newPost.trim()) return;
    setPosts([{ user: "You (Farmer)", text: newPost }, ...posts]);
    setNewPost('');
  };

  return (
    <div>
      <div className="header">
        <h1>🛒 Seed Store & Academy</h1>
        <p>Buy Pure Inputs & Learn Modern Methods</p>
      </div>

      <div className="container">
        {/* Seed Store Section */}
        <h2>🌱 Verified Organic Seed Store</h2>
        {seeds.map((s, idx) => (
          <div className="card" key={idx} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
              <h3>{s.name}</h3>
              <p style={{color: '#2e7d32', fontWeight: 'bold'}}>{s.price} <span style={{color: '#999', fontSize: '12px', fontWeight: 'normal'}}>{s.rating}</span></p>
            </div>
            <button className="btn" style={{width: 'auto'}} onClick={() => alert(`${s.name} added to cart!`)}>Buy</button>
          </div>
        ))}

        {/* Tutorials Section */}
        <h2 style={{marginTop: '25px'}}>📺 Organic Masterclass Video Tutorials</h2>
        {tutorials.map((t, idx) => (
          <div className="card" key={idx}>
            <span className="badge" style={{background: '#e3f2fd', color: '#1565c0'}}>{t.level} • {t.duration}</span>
            <h3>{t.title}</h3>
            <button className="btn" style={{background: '#1565c0'}} onClick={() => alert("Loading safe, data-optimized streaming player...")}>▶️ Watch Video</button>
          </div>
        ))}

        {/* Additional Feature: Peer-to-Peer Community Forum */}
        <h2 style={{marginTop: '25px'}}>💬 Community Discussion Board</h2>
        <div className="card" style={{borderLeftColor: '#9c27b0'}}>
          <textarea 
            placeholder="Share an organic victory or ask community veterans a question..." 
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            style={{width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', minHeight: '60px'}}
          />
          <button onClick={handlePost} className="btn" style={{background: '#9c27b0', marginTop: '5px'}}>Publish to Feed</button>

          <div style={{marginTop: '15px'}}>
            {posts.map((p, idx) => (
              <div key={idx} style={{background: '#f9f9f9', padding: '10px', borderRadius: '6px', marginBottom: '8px', fontSize: '13px'}}>
                <strong>{p.user}: </strong> "{p.text}"
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
