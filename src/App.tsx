import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { MapView } from './pages/MapView';
import { ListView } from './pages/ListView';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#ecf0f1' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MapView />} />
          <Route path="/list" element={<ListView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
