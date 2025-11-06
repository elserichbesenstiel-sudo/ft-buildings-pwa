import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  return (
    <nav style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#2c3e50',
      color: 'white'
    }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          backgroundColor: location.pathname === '/' ? '#34495e' : 'transparent',
          borderRadius: '4px'
        }}
      >
        Map View
      </Link>
      <Link
        to="/list"
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          backgroundColor: location.pathname === '/list' ? '#34495e' : 'transparent',
          borderRadius: '4px'
        }}
      >
        List View
      </Link>
    </nav>
  );
}
