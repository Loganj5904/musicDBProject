// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminStatus, setAdminStatus] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [result, setResult] = useState(null);

  const smartSearch = async () => {
    try {
      const res = await axios.get(`/api/search?query=${encodeURIComponent(query)}`);
      setResult(res.data);
    } catch (err) {
      setResult({ error: 'No results found.' });
    }
  };

  
  const adminLogin = async () => {
    try {
      const res = await axios.post(`/api/admin/login`, {
        username: adminUser,
        password: adminPass,
      });
      setAdminStatus(res.data);
    } catch (err) {
      setAdminStatus('Login failed');
    }
  };

  return (
    <div>
      <nav style={{ background: '#004080', padding: '1em', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>🎵 Song DB</h1>
        <button onClick={() => setShowAdmin(!showAdmin)} style={{ backgroundColor: '#007bff', color: 'white', padding: '0.5em 1em', border: 'none', cursor: 'pointer' }}>Admin Login</button>
      </nav>

      <div style={{ padding: '2em', background: '#f4f4f4' }}>
        <h2>Search Music DB</h2>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for song, artist, album, genre, producer, label..."
          style={{ padding: '0.5em', width: '300px' }}
        />
        <button onClick={smartSearch} style={{ marginLeft: '1em', padding: '0.5em 1em' }}>Search</button>

        {result && (
          <div style={{ marginTop: '2em', background: 'white', padding: '1em', border: '1px solid #ccc' }}>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        {showAdmin && (
          <div style={{ marginTop: '2em', background: 'white', padding: '1em', border: '1px solid #ccc', width: '300px' }}>
            <h3>Admin Login</h3>
            <input value={adminUser} onChange={e => setAdminUser(e.target.value)} placeholder="Username" style={{ display: 'block', marginBottom: '0.5em', width: '100%' }} />
            <input type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} placeholder="Password" style={{ display: 'block', marginBottom: '0.5em', width: '100%' }} />
            <button onClick={adminLogin}>Login</button>
            <pre>{adminStatus}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
