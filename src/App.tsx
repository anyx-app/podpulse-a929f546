import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Discover from './pages/Discover';

// Placeholder components for other routes to prevent 404s during dev
const Library = () => <div className="p-10 text-white">Library (Coming Soon)</div>;
const SearchPage = () => <div className="p-10 text-white">Search (Coming Soon)</div>;

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Discover />} />
        <Route path="/library" element={<Library />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
