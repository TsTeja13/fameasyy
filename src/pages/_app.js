import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        body { background-color: #f4f7f5; color: #2c3e50; min-height: 100vh; padding-bottom: 70px; }
        .nav-bar { position: fixed; bottom: 0; left: 0; right: 0; height: 65px; background: white; display: flex; justify-content: space-around; align-items: center; border-top: 1px solid #e0e0e0; box-shadow: 0 -2px 10px rgba(0,0,0,0.05); z-index: 1000; }
        .nav-item { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #7f8c8d; font-size: 12px; font-weight: 500; cursor: pointer; border: none; background: none; }
        .nav-item.active { color: #2e7d32; font-weight: bold; }
        .nav-icon { font-size: 20px; margin-bottom: 4px; }
        .container { padding: 20px; max-width: 600px; margin: 0 auto; }
        .header { background: #2e7d32; color: white; padding: 20px; border-radius: 0 0 20px 20px; margin-bottom: 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .card { background: white; padding: 20px; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border-left: 5px solid #2e7d32; }
        .btn { background: #2e7d32; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; font-size: 16px; margin-top: 10px; transition: background 0.2s; display: flex; justify-content: center; align-items: center; gap: 8px; }
        .btn:hover { background: #1b5e20; }
        .badge { background: #e8f5e9; color: #2e7d32; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; display: inline-block; margin-bottom: 8px; }
      `}</style>
      
      <Component {...pageProps} />

      <nav className="nav-bar">
        <a href="/" className="nav-item">
          <span className="nav-icon">🌿</span>
          <span>Home & Tips</span>
        </a>
        <a href="/chatbot" className="nav-item">
          <span className="nav-icon">🤖</span>
          <span>AI Assistant</span>
        </a>
        <a href="/schemes" className="nav-item">
          <span className="nav-icon">📜</span>
          <span>Schemes</span>
        </a>
        <a href="/market" className="nav-item">
          <span className="nav-icon">🛒</span>
          <span>Market & Learn</span>
        </a>
      </nav>
    </>
  );
}
