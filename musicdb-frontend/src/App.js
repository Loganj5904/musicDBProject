// // // // src/App.js
// // // import React, { useState } from 'react';
// // // import axios from 'axios';


// // // function App() {
// // //   const [query, setQuery] = useState('');
// // //   const [adminUser, setAdminUser] = useState('');
// // //   const [adminPass, setAdminPass] = useState('');
// // //   const [adminStatus, setAdminStatus] = useState('');
// // //   const [showAdmin, setShowAdmin] = useState(false);
// // //   const [result, setResult] = useState(null);

// // //   const smartSearch = async () => {
// // //     try {
// // //       const res = await axios.get(`/search?query=${encodeURIComponent(query)}`);
// // //       setResult(res.data);
// // //       console.log(res.data);
// // //     } catch (err) {
// // //       setResult({ error: 'No results found.' });
// // //     }
// // //   };

  
// // //   const adminLogin = async () => {
// // //     try {
// // //       const res = await axios.post(`/admin/login`, {
// // //         username: adminUser,
// // //         password: adminPass,
// // //       });
// // //       setAdminStatus(res.data);
// // //     } catch (err) {
// // //       setAdminStatus('Login failed');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <nav style={{ background: '#004080', padding: '1em', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //         <h1 style={{ margin: 0 }}>🎵 Song DB</h1>
// // //         <button onClick={() => setShowAdmin(!showAdmin)} style={{ backgroundColor: '#007bff', color: 'white', padding: '0.5em 1em', border: 'none', cursor: 'pointer' }}>Admin Login</button>
// // //       </nav>

// // //       <div style={{ padding: '2em', background: '#f4f4f4' }}>
// // //         <h2>Search Music DB</h2>
// // //         <input
// // //           value={query}
// // //           onChange={e => setQuery(e.target.value)}
// // //           placeholder="Search for song, artist, album, genre, producer, label..."
// // //           style={{ padding: '0.5em', width: '300px' }}
// // //         />
// // //         <button onClick={smartSearch} style={{ marginLeft: '1em', padding: '0.5em 1em' }}>Search</button>

// // //         {result && (
// // //           <div style={{ marginTop: '2em', background: 'white', padding: '1em', border: '1px solid #ccc' }}>
// // //             {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
// // //           <div>
// // //           {result.artist && (
// // //             <div>
// // //               <h3>🎤 Artist: {result.artist.name}</h3>
// // //             </div>
// // //           )}

// // //           {result.albums_by_artist?.length > 0 && (
// // //             <div>
// // //               <h4>📀 Albums:</h4>
// // //               <ul>
// // //                 {result.albums_by_artist.map((album, idx) => (
// // //                   <li key={idx}>{album.name}</li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           )}

// // //           {result.songs_by_artist?.length > 0 && (
// // //             <div>
// // //               <h4>🎵 Songs:</h4>
// // //               <ul>
// // //                 {result.songs_by_artist.map((song, idx) => (
// // //                   <li key={idx}>{song.title}</li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           )}

// // //           {result.error && <p style={{ color: 'red' }}>{result.error}</p>}
// // //         </div>

// // //           </div>
// // //         )}

// // //         {showAdmin && (
// // //           <div style={{ marginTop: '2em', background: 'white', padding: '1em', border: '1px solid #ccc', width: '300px' }}>
// // //             <h3>Admin Login</h3>
// // //             <input value={adminUser} onChange={e => setAdminUser(e.target.value)} placeholder="Username" style={{ display: 'block', marginBottom: '0.5em', width: '100%' }} />
// // //             <input type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} placeholder="Password" style={{ display: 'block', marginBottom: '0.5em', width: '100%' }} />
// // //             <button onClick={adminLogin}>Login</button>
// // //             <pre>{adminStatus}</pre>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // src/App.js
// // // src/App.js

// // // src/App.js
// // import React, { useState } from "react";
// // import axios from "axios";

// // function App() {
// //   const [query, setQuery] = useState("");
// //   const [artist, setArtist] = useState(null);
// //   const [albums, setAlbums] = useState([]);
// //   const [songs, setSongs] = useState([]);
// //   const [producers, setProducers] = useState([]);
// //   const [genres, setGenres] = useState([]);
// //   const [labels, setLabels] = useState([]);
// //   const [adminUser, setAdminUser] = useState("");
// //   const [adminPass, setAdminPass] = useState("");
// //   const [adminStatus, setAdminStatus] = useState("");
// //   const [showAdmin, setShowAdmin] = useState(false);

// //   const fetchAll = async () => {
// //     try {
// //       const [
// //         artistRes,
// //         albumRes,
// //         songRes,
// //         producerRes,
// //         genreRes,
// //         labelRes,
// //       ] = await Promise.all([
// //         axios.get(`http://localhost:8080/artist/name/${encodeURIComponent(query)}`),
// //         axios.get(`http://localhost:8080/album/name/${encodeURIComponent(query)}`),
// //         axios.get(`http://localhost:8080/song/title/${encodeURIComponent(query)}`),
// //         axios.get(`http://localhost:8080/producer/name/${encodeURIComponent(query)}`),
// //         axios.get(`http://localhost:8080/genre/name/${encodeURIComponent(query)}`),
// //         axios.get(`http://localhost:8080/label/name/${encodeURIComponent(query)}`),
// //       ]);

// //       setArtist(artistRes.data);
// //       setAlbums(albumRes.data || []);
// //       setSongs(songRes.data || []);
// //       setProducers(producerRes.data || []);
// //       setGenres(genreRes.data || []);
// //       setLabels(labelRes.data || []);
// //     } catch (err) {
// //       console.error("Fetch error:", err);
// //       setArtist(null);
// //       setAlbums([]);
// //       setSongs([]);
// //       setProducers([]);
// //       setGenres([]);
// //       setLabels([]);
// //     }
// //   };

// //   const adminLogin = async () => {
// //     try {
// //       const res = await axios.post("/api/admin/login", {
// //         username: adminUser,
// //         password: adminPass,
// //       });
// //       setAdminStatus(res.data);
// //     } catch (err) {
// //       console.error("Admin login error:", err);
// //       setAdminStatus("Login failed");
// //     }
// //   };

// //   return (
// //     <div>
// //       <nav
// //         style={{
// //           background: "#004080",
// //           padding: "1em",
// //           color: "white",
// //           display: "flex",
// //           justifyContent: "space-between",
// //         }}
// //       >
// //         <h1>🎵 Song DB</h1>
// //         <button
// //           onClick={() => setShowAdmin((s) => !s)}
// //           style={{
// //             backgroundColor: "#007bff",
// //             color: "white",
// //             border: "none",
// //             padding: "0.5em 1em",
// //           }}
// //         >
// //           Admin Login
// //         </button>
// //       </nav>

// //       <div style={{ padding: "2em", background: "#f4f4f4" }}>
// //         <h2>Search Music DB</h2>
// //         <input
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Artist, Album, Song, Producer, Genre, or Label"
// //           style={{ padding: "0.5em", width: "300px" }}
// //         />
// //         <button
// //           onClick={fetchAll}
// //           style={{ marginLeft: "1em", padding: "0.5em 1em" }}
// //         >
// //           Search
// //         </button>

// //         <div
// //           style={{
// //             marginTop: "2em",
// //             background: "white",
// //             padding: "1em",
// //             border: "1px solid #ccc",
// //           }}
// //         >
// //           {artist && <h3>🎤 Artist: {artist.name}</h3>}

// //           {albums.length > 0 && (
// //             <>
// //               <h4>📀 Albums:</h4>
// //               <ul>{albums.map((a) => <li key={a.id}>{a.name}</li>)}</ul>
// //             </>
// //           )}

// //           {songs.length > 0 && (
// //             <>
// //               <h4>🎵 Songs:</h4>
// //               <ul>{songs.map((s) => <li key={s.id}>{s.title}</li>)}</ul>
// //             </>
// //           )}

// //           {producers.length > 0 && (
// //             <>
// //               <h4>🎚️ Producers:</h4>
// //               <ul>{producers.map((p) => <li key={p.id}>{p.name}</li>)}</ul>
// //             </>
// //           )}

// //           {genres.length > 0 && (
// //             <>
// //               <h4>🎼 Genres:</h4>
// //               <ul>{genres.map((g) => <li key={g.id}>{g.name}</li>)}</ul>
// //             </>
// //           )}

// //           {labels.length > 0 && (
// //             <>
// //               <h4>🏷️ Labels:</h4>
// //               <ul>{labels.map((l) => <li key={l.id}>{l.name}</li>)}</ul>
// //             </>
// //           )}
// //         </div>

// //         {showAdmin && (
// //           <div
// //             style={{
// //               marginTop: "2em",
// //               background: "white",
// //               padding: "1em",
// //               border: "1px solid #ccc",
// //               width: "300px",
// //             }}
// //           >
// //             <h3>Admin Login</h3>
// //             <input
// //               value={adminUser}
// //               onChange={(e) => setAdminUser(e.target.value)}
// //               placeholder="Username"
// //               style={{ width: "100%", marginBottom: "0.5em" }}
// //             />
// //             <input
// //               type="password"
// //               value={adminPass}
// //               onChange={(e) => setAdminPass(e.target.value)}
// //               placeholder="Password"
// //               style={{ width: "100%", marginBottom: "0.5em" }}
// //             />
// //             <button onClick={adminLogin}>Login</button>
// //             <pre>{adminStatus}</pre>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.js
// // src/App.js
// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   /* ───────────────────────────────
//      State
//   ─────────────────────────────── */
//   const [query, setQuery]             = useState("");
//   const [artist, setArtist]           = useState(null);
//   const [albums, setAlbums]           = useState([]);
//   const [songs, setSongs]             = useState([]);
//   const [producers, setProducers]     = useState([]);
//   const [genres, setGenres]           = useState([]);
//   const [labels, setLabels]           = useState([]);
//   const [adminUser, setAdminUser]     = useState("");
//   const [adminPass, setAdminPass]     = useState("");
//   const [adminStatus, setAdminStatus] = useState("");
//   const [showAdmin, setShowAdmin]     = useState(false);

//   /* ───────────────────────────────
//      Search helpers
//   ─────────────────────────────── */
//   const fetchAll = async () => {
//     if (!query.trim()) return;

//     try {
//       const [
//         artistRes,
//         albumRes,
//         songRes,
//         producerRes,
//         genreRes,
//         labelRes
//       ] = await Promise.all([
//         axios.get(
//           `http://localhost:8080/artist/name/${encodeURIComponent(query)}`
//         ),
//         axios.get(
//           `http://localhost:8080/album/name/${encodeURIComponent(query)}`
//         ),
//         axios.get(
//           `http://localhost:8080/song/name/${encodeURIComponent(query)}` // ✅ fixed
//         ),
//         axios.get(
//           `http://localhost:8080/producer/name/${encodeURIComponent(query)}`
//         ),
//         axios.get(
//           `http://localhost:8080/genre/name/${encodeURIComponent(query)}`
//         ),
//         axios.get(
//           `http://localhost:8080/label/name/${encodeURIComponent(query)}`
//         )
//       ]);

//       setArtist(artistRes.data ?? null);
//       setAlbums(albumRes.data ?? []);
//       setSongs(songRes.data ?? []);
//       setProducers(producerRes.data ?? []);
//       setGenres(genreRes.data ?? []);
//       setLabels(labelRes.data ?? []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//       // clear all on error
//       setArtist(null);
//       setAlbums([]);
//       setSongs([]);
//       setProducers([]);
//       setGenres([]);
//       setLabels([]);
//     }
//   };

//   /* ───────────────────────────────
//      Admin login
//   ─────────────────────────────── */
//   const adminLogin = async () => {
//     if (!adminUser || !adminPass) return;

//     try {
//       const res = await axios.post(
//         `http://localhost:8080/login/${encodeURIComponent(
//           adminUser
//         )}/${encodeURIComponent(adminPass)}` // ✅ fixed
//       );
//       setAdminStatus(res.data);
//     } catch (err) {
//       console.error("Admin login error:", err);
//       setAdminStatus("Login failed");
//     }
//   };

//   /* ───────────────────────────────
//      Render
//   ─────────────────────────────── */
//   return (
//     <div>
//       {/* Simple nav */}
//       <nav
//         style={{
//           background: "#004080",
//           padding: "1em",
//           color: "white",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center"
//         }}
//       >
//         <h1 style={{ margin: 0 }}>🎵 Song DB</h1>
//         <button
//           onClick={() => setShowAdmin((s) => !s)}
//           style={{
//             backgroundColor: "#007bff",
//             color: "white",
//             padding: "0.5em 1em",
//             border: "none"
//           }}
//         >
//           Admin Login
//         </button>
//       </nav>

//       {/* Search area */}
//       <div style={{ padding: "2em", background: "#f4f4f4" }}>
//         <h2>Search Music DB</h2>
//         <input
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Artist, Album, Song, Producer, Genre, or Label"
//           style={{ padding: "0.5em", width: "300px" }}
//         />
//         <button
//           onClick={fetchAll}
//           style={{ marginLeft: "1em", padding: "0.5em 1em" }}
//         >
//           Search
//         </button>

//         {/* Results */}
//         <div
//           style={{
//             marginTop: "2em",
//             background: "white",
//             padding: "1em",
//             border: "1px solid #ccc"
//           }}
//         >
//           {artist && <h3>🎤 Artist: {artist.name}</h3>}

//           {albums.length > 0 && (
//             <>
//               <h4>📀 Albums:</h4>
//               <ul>{albums.map((a) => <li key={a.id}>{a.name}</li>)}</ul>
//             </>
//           )}

//           {songs.length > 0 && (
//             <>
//               <h4>🎵 Songs:</h4>
//               <ul>{songs.map((s) => <li key={s.id}>{s.title}</li>)}</ul>
//             </>
//           )}

//           {producers.length > 0 && (
//             <>
//               <h4>🎚️ Producers:</h4>
//               <ul>{producers.map((p) => <li key={p.id}>{p.name}</li>)}</ul>
//             </>
//           )}

//           {genres.length > 0 && (
//             <>
//               <h4>🎼 Genres:</h4>
//               <ul>{genres.map((g) => <li key={g.id}>{g.name}</li>)}</ul>
//             </>
//           )}

//           {labels.length > 0 && (
//             <>
//               <h4>🏷️ Labels:</h4>
//               <ul>{labels.map((l) => <li key={l.id}>{l.name}</li>)}</ul>
//             </>
//           )}
//         </div>

//         {/* Admin panel */}
//         {showAdmin && (
//           <div
//             style={{
//               marginTop: "2em",
//               background: "white",
//               padding: "1em",
//               border: "1px solid #ccc",
//               width: "300px"
//             }}
//           >
//             <h3>Admin Login</h3>
//             <input
//               value={adminUser}
//               onChange={(e) => setAdminUser(e.target.value)}
//               placeholder="Username"
//               style={{
//                 display: "block",
//                 marginBottom: "0.5em",
//                 width: "100%"
//               }}
//             />
//             <input
//               type="password"
//               value={adminPass}
//               onChange={(e) => setAdminPass(e.target.value)}
//               placeholder="Password"
//               style={{
//                 display: "block",
//                 marginBottom: "0.5em",
//                 width: "100%"
//               }}
//             />
//             <button onClick={adminLogin}>Login</button>
//             <pre>{adminStatus}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from "react";
import axios from "axios";

/* -------------------------  tweak for dev convenience  ---------------------- *
 * If you add  "proxy": "http://localhost:8080"  to your package.json,
 * you can drop the BASE_URL prefix everywhere and just use "/api/search".
 * ---------------------------------------------------------------------------- */
const BASE_URL = "http://localhost:8080";

function App() {
  /* ────────────────────────────  state  ──────────────────────────── */
  const [query, setQuery]         = useState("");
  const [result, setResult]       = useState(null);
  const [error, setError]         = useState("");

  const [adminUser, setAdminUser] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [adminStatus, setAdminStatus] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);
  const [regUser, setRegUser] = useState("");
  const [regPass, setRegPass] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  /* ──────────────────────────  helpers  ─────────────────────────── */
  const smartSearch = async () => {
    const q = query.trim();
    if (!q) return;

    try {
      const res = await axios.get(`${BASE_URL}/api/search`, {
        params: { query: q },
      });
      setResult(res.data);
      setError("");
    } catch (err) {
      setResult(null);
      setError(
        err.response?.status === 404 ? "No match found." : "Server error."
      );
    }
  };

  const adminLogin = async () => {
    if (!adminUser || !adminPass) return;
    try {
      const res = await axios.post(
        `${BASE_URL}/login/${encodeURIComponent(adminUser)}/${encodeURIComponent(
          adminPass
        )}`
      );
      setAdminStatus(res.data);
    } catch {
      setAdminStatus("Login failed");
    }
  };

  const handleRegister = async () => {
    if (!regUser || !regPass) return;
    try {
      const res = await axios.post(
        `${BASE_URL}/register/${encodeURIComponent(regUser)}/${encodeURIComponent(
          regPass
        )}`
      );
      setRegisterStatus(res.data);
      console.log("Registration Complete", res.data);
    } catch {
      setRegisterStatus("Registration failed");
    }
  };

  /* Adding Entries */
  const isLoggedIn = adminStatus !== "Login failed" && adminStatus !== "";

  const handleAddSong = async () => {
    if (!newSongName || !newArtistName || !newStreams || !newAlbumName || !newProducerName || !newLabelName || !newGenreName) {
      setAddSongStatus("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/song/add/${encodeURIComponent(newSongName)}/${encodeURIComponent(newArtistName)}/${encodeURIComponent(newStreams)}/${encodeURIComponent(newAlbumName)}/${encodeURIComponent(newProducerName)}/${encodeURIComponent(newGenreName)}`
      );
      setAddSongStatus("Song added successfully!");
      console.log("Song added successfully:", res.data);
    } catch (error) {
      setAddSongStatus("Failed to add song");
      console.error(error);
    }
  };

  const handleAddArtist = async () => {
    if (!newArtistName) {
      setAddArtistStatus("Please fill in the field");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/artist/add/${encodeURIComponent(newArtistName)}`
      );
      setAddArtistStatus("Artist added successfully!");
      console.log("Artist added successfully:", res.data);
    } catch (error) {
      setAddArtistStatus("Failed to add artist");
      console.error(error);
    }
  };

  const handleAddGenre = async () => {
    if (!newGenreName) {
      setAddGenreStatus("Please fill in the field");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/genre/add/${encodeURIComponent(newGenreName)}`
      );
      setAddGenreStatus("Genre added successfully!");
      console.log("Genre added successfully:", res.data);
    } catch (error) {
      setAddGenreStatus("Failed to add genre");
      console.error(error);
    }
  };

  const handleAddProducer = async () => {
    if (!newProducerName) {
      setAddProducerStatus("Please fill in the field");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/producer/add/${encodeURIComponent(newProducerName)}`
      );
      setAddProducerStatus("Producer added successfully!");
      console.log("Producer added successfully:", res.data);
    } catch (error) {
      setAddProducerStatus("Failed to add producer");
      console.error(error);
    }
  };

  const handleAddLabel = async () => {
    if (!newLabelName) {
      setAddLabelStatus("Please fill in the field");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/label/add/${encodeURIComponent(newLabelName)}`
      );
      setAddLabelStatus("Label added successfully!");
      console.log("Label added successfully:", res.data);
    } catch (error) {
      setAddLabelStatus("Failed to add label");
      console.error(error);
    }
  };


  const handleAddAlbum = async () => {
    if (!newArtistName || !newAlbumName || !newLabelName) {
      setAddAlbumStatus("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/album/add/${encodeURIComponent(newAlbumName)}/${encodeURIComponent(newArtistName)}/${encodeURIComponent(newLabelName)}`
      );
      setAddAlbumStatus("Album added successfully!");
      console.log("Album added successfully:", res.data);
    } catch (error) {
      setAddAlbumStatus("Failed to add album");
      console.error(error);
    }
  };

  

  const [newSongName, setNewSongName] = useState("");
  const [newArtistName, setNewArtistName] = useState("");
  const [newStreams, setNewStreams] = useState("");
  const [newAlbumName, setNewAlbumName] = useState("");
  const [newProducerName, setNewProducerName] = useState("");
  const [newLabelName, setNewLabelName] = useState("");
  const [newGenreName, setNewGenreName] = useState("");
  const [addSongStatus, setAddSongStatus] = useState("");
  const [addArtistStatus, setAddArtistStatus] = useState("");
  const [addGenreStatus, setAddGenreStatus] = useState("");
  const [addLabelStatus, setAddLabelStatus] = useState("");
  const [addProducerStatus, setAddProducerStatus] = useState("");
  const [addAlbumStatus, setAddAlbumStatus] = useState("");

 






  

    





  /* ───────────────────────────  render  ─────────────────────────── */
  const renderList = (title, items, nameKey = "name") =>
    Array.isArray(items) && items.length > 0 ? (
      <>
        <h4>{title}</h4>
        <ul>
          {items.map((it, idx) => (
            <li key={idx}>{it[nameKey]}</li>
          ))}
        </ul>
      </>
    ) : null;

  return (
    <div>
      {/* ────────── nav bar ────────── */}
      <nav
        style={{
          background: "#004080",
          padding: "1em",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>🎵 Music DB</h1>
        <button
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "0.5em 1em",
          }}
          onClick={() => setShowAdmin((s) => !s)}
        >
          Admin Login
        </button>

        

        <input 
          value = {regUser}
          onChange = {(e) => setRegUser(e.target.value)}
          placeholder = "New Username"
          style={{ padding: "0.5em", width: "150px" }}
        />

        <input 
          value = {regPass}
          onChange = {(e) => setRegPass(e.target.value)}
          placeholder = "New Password"
          style={{ padding: "0.5em", width: "150px" }}
        />

        <button onClick={handleRegister}>Register</button>

      </nav>

      {/* ────────── search box ────────── */}
      <div style={{ padding: "2em", background: "#f4f4f4" }}>
        <h2>Search</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Artist, album, song, genre, label, producer…"
          style={{ padding: "0.5em", width: "300px" }}
        />
        <button
          onClick={smartSearch}
          style={{ marginLeft: "1em", padding: "0.5em 1em" }}
        >
          Search
        </button>

        {/* ────────── results panel ────────── */}
        {error && (
          <p style={{ color: "red", marginTop: "1em", fontWeight: "bold" }}>
            {error}
          </p>
        )}

        {result && (
          <div
            style={{
              marginTop: "2em",
              background: "white",
              padding: "1em",
              border: "1px solid #ccc",
            }}
          >
            {/* single entities */}
            {!result.isAlbumSearch && result.artist && <h3>🎤 Artist: {result.artist.name}</h3>}
            {result.producer && <h3>🎚️ Producer: {result.producer.name}</h3>}
            {result.genre && <h3>🎼 Genre: {result.genre.name}</h3>}
            {!result.isAlbumSearch && result.label && <h3>🏷️ Label: {result.label.name}</h3>}
            {/*{result.album && <h3>📀 Album: {result.album.name}</h3>}*/}
            {result.album && (
              <>
              <h3>📀 Album: {result.album.name}</h3>
              <p>🎤 Artist: {result.album.artist.name}</p>
              <p>🏷️ Label: {result.label.name}</p>
              {renderList("🎵 Songs on Album:", result.songs_on_album, "name")}
              </>
            )}


            {/*{result.song && <h3>🎵 Song: {result.song.name}</h3>}*/}
            {result.song && result.song.length === 1 && (
              <div>
                <h3>🎵 Song: {result.song[0].name}</h3>
                <p>🎤 Artist: {result.song[0].artist?.name}</p>
                <p>🎼 Genre: {result.song[0].genre?.name}</p>
                <p>🎚️ Producer: {result.song[0].producer?.name}</p>
                <p>📀 Album: {result.song[0].album?.name}</p>
              </div>
            
            )}

            {result.song && result.song.length > 1 && (
              <div>
                <h3>🎵 Songs:</h3>
                {result.song.map((song) => (
                  <div key={song.id} style={{ marginBottom: "1rem" }}>
                    <h4>🎵 Song: {song.name}</h4>
                    <p>🎤 Artist: {song.artist?.name}</p>
                    <p>🎼 Genre: {song.genre?.name}</p>
                    <p>🎚️ Producer: {song.producer?.name}</p>
                    <p>📀 Album: {song.album?.name}</p>
                  </div>
                ))}
              </div>
            )}
            

            {/* lists supplied by SmartSearchController */}
            {renderList("📀 Albums:", result.albums_by_artist)}
            {/* {renderList("🎵 Songs:", result.songs_by_artist, "title")} */}
            {renderList("🎵 Songs:", result.songs_by_artist, "name")}

            {renderList("📀 Albums (by label):", result.albums_by_label)}
            {/* {renderList("🎵 Songs (by genre):", result.songs_by_genre, "title")} */}
            {renderList("🎵 Songs (by genre):", result.songs_by_genre, "name")}
            {/* {renderList(
              "🎵 Songs (by producer):",
              result.songs_by_producer,
              "title"
            )} */}
            {renderList("🎵 Songs (by producer):", result.songs_by_producer, "name")}
            {/*{renderList("🎵 Songs on Album:", result.songs_on_album, "name")}*/}


            {/* direct song hit */}
            {/* {renderList("🎵 Songs:", result.song, "title")} */}
            {!result.isSongSearch && renderList("🎵 Songs:", result.song, "name")}
          </div>
        )}

        {/* ────────── admin panel ────────── */}
        {showAdmin && (
          <div
            style={{
              marginTop: "2em",
              background: "white",
              padding: "1em",
              border: "1px solid #ccc",
              width: "300px",
            }}
          >
            <h3>Admin Login</h3>
            <input
              value={adminUser}
              onChange={(e) => setAdminUser(e.target.value)}
              placeholder="Username"
              style={{ width: "100%", marginBottom: "0.5em" }}
            />
            <input
              type="password"
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              placeholder="Password"
              style={{ width: "100%", marginBottom: "0.5em" }}
            />
            <button onClick={adminLogin}>Login</button>
            <pre>{adminStatus}</pre>
          </div>
        )}
        {isLoggedIn && (
          <div style={{ marginTop: "2em" }}>

            <h3>Add Artist</h3>
            <input placeholder="Artist Name" value={newArtistName} onChange={(e) => setNewArtistName(e.target.value)} />
            <button onClick={handleAddArtist}>Submit Artist</button>
            <p>{addArtistStatus}</p>

            <h3>Add Genre</h3>
            <input placeholder="Genre Name" value={newGenreName} onChange={(e) => setNewGenreName(e.target.value)} />
            <button onClick={handleAddGenre}>Submit Genre</button>
            <p>{addGenreStatus}</p>

            <h3>Add Label</h3>
            <input placeholder="Label Name" value={newLabelName} onChange={(e) => setNewLabelName(e.target.value)} />
            <button onClick={handleAddLabel}>Submit Label</button>
            <p>{addLabelStatus}</p>

            <h3>Add Producer</h3>
            <input placeholder="Producer Name" value={newProducerName} onChange={(e) => setNewProducerName(e.target.value)} />
            <button onClick={handleAddProducer}>Submit Producer</button>
            <p>{addProducerStatus}</p>

            <h3>Add Album</h3>
            <input placeholder="Album Name" value={newAlbumName} onChange={(e) => setNewAlbumName(e.target.value)} />
            <input placeholder="Artist Name" value={newArtistName} onChange={(e) => setNewArtistName(e.target.value)} />
            <input placeholder="Label Name" value={newLabelName} onChange={(e) => setNewLabelName(e.target.value)} />

            <button onClick={handleAddAlbum}>Submit Album</button>
            <p>{addAlbumStatus}</p>


            <h3>Add Song</h3>
            <input placeholder="Song Name" value={newSongName} onChange={(e) => setNewSongName(e.target.value)} />
            <input placeholder="Artist Name" value={newArtistName} onChange={(e) => setNewArtistName(e.target.value)} />
            <input placeholder="Streams" value={newStreams} onChange={(e) => setNewStreams(e.target.value)} />
            <input placeholder="Album Name" value={newAlbumName} onChange={(e) => setNewAlbumName(e.target.value)} />
            <input placeholder="Producer Name" value={newProducerName} onChange={(e) => setNewProducerName(e.target.value)} />
            <input placeholder="Label Name" value={newLabelName} onChange={(e) => setNewLabelName(e.target.value)} />
            <input placeholder="Genre Name" value={newGenreName} onChange={(e) => setNewGenreName(e.target.value)} />
    
            <button onClick={handleAddSong}>Submit Song</button>
            <p>{addSongStatus}</p>

          

            
          </div>
    )}

      </div>
    </div>
  );
}

export default App;

