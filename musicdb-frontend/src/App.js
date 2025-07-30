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
            {result.artist && <h3>🎤 Artist: {result.artist.name}</h3>}
            {result.producer && <h3>🎚️ Producer: {result.producer.name}</h3>}
            {result.genre && <h3>🎼 Genre: {result.genre.name}</h3>}
            {result.label && <h3>🏷️ Label: {result.label.name}</h3>}

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

            {/* direct song hit */}
            {/* {renderList("🎵 Songs:", result.song, "title")} */}
            {renderList("🎵 Songs:", result.song, "name")}
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
      </div>
    </div>
  );
}

export default App;

