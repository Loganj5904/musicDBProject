// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// // src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [artistId, setArtistId] = useState('');
//   const [result, setResult] = useState('');

//   const getArtist = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/artists/${artistId}`);
//       setResult(JSON.stringify(response.data, null, 2));
//     } catch (error) {
//       setResult('Error fetching artist');
//     }
//   };

//   return (
//     <div style={{ padding: '2em' }}>
//       <h1>Search Artist</h1>
//       <input
//         type="text"
//         value={artistId}
//         placeholder="Enter artist ID"
//         onChange={(e) => setArtistId(e.target.value)}
//       />
//       <button onClick={getArtist}>Search</button>
//       <pre>{result}</pre>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [tab, setTab] = useState('artists');
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminStatus, setAdminStatus] = useState('');

  const fetchData = async (type) => {
    try {
      const urlMap = {
        artist: `/api/artists/${query}`,
        album: `/api/albums/${query}`,
        song: `/api/songs/${query}`,
        producer: `/api/producers/${query}`,
      };
      const response = await axios.get(urlMap[type]);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setResult('Error fetching data');
    }
  };

  const adminLogin = async () => {
    try {
      const res = await axios.post('/api/admin/login', {
        username: adminUser,
        password: adminPass,
      });
      setAdminStatus(res.data);
    } catch (err) {
      setAdminStatus('Login failed');
    }
  };

  return (
    <div style={{ padding: '2em' }}>
      <nav style={{ background: '#333', color: 'white', padding: '1em' }}>
        <a href="#" onClick={() => setTab('artists')} style={{ color: 'white', marginRight: '1em' }}>Artists</a>
        <a href="#" onClick={() => setTab('albums')} style={{ color: 'white', marginRight: '1em' }}>Albums</a>
        <a href="#" onClick={() => setTab('songs')} style={{ color: 'white', marginRight: '1em' }}>Songs</a>
        <a href="#" onClick={() => setTab('producers')} style={{ color: 'white', marginRight: '1em' }}>Producers</a>
        <a href="#" onClick={() => setTab('admin')} style={{ color: 'white' }}>Admin</a>
      </nav>

      {tab !== 'admin' && (
        <div>
          <h2>Search {tab.charAt(0).toUpperCase() + tab.slice(1)}</h2>
          <input
            placeholder={`Enter ${tab} name or ID`}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button onClick={() => fetchData(tab)}>Search</button>
          <pre>{result}</pre>
        </div>
      )}

      {tab === 'admin' && (
        <div style={{ background: '#fff', padding: '1em', width: '300px', marginLeft: 'auto' }}>
          <h2>Admin Login</h2>
          <input
            placeholder="Username"
            value={adminUser}
            onChange={e => setAdminUser(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={adminPass}
            onChange={e => setAdminPass(e.target.value)}
          /><br />
          <button onClick={adminLogin}>Login</button>
          <pre>{adminStatus}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
