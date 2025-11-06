import { demoBuildings } from '../data/buildings';
import { Building } from '../types/building';

export function ListView() {
  const getStatusColor = (status: Building['status']) => {
    switch (status) {
      case 'Active':
        return '#27ae60';
      case 'Under Construction':
        return '#f39c12';
      case 'Planned':
        return '#3498db';
      default:
        return '#95a5a6';
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>FoodTec Building Sites</h1>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {demoBuildings.map((building) => (
          <div
            key={building.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1.5rem',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{building.name}</h2>
              <span
                style={{
                  backgroundColor: getStatusColor(building.status),
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 500
                }}
              >
                {building.status}
              </span>
            </div>

            <div style={{ display: 'grid', gap: '0.5rem', color: '#555' }}>
              <div>
                <strong>Address:</strong> {building.address}
              </div>
              <div>
                <strong>Type:</strong> {building.type}
              </div>
              <div>
                <strong>Size:</strong> {building.size.toLocaleString()} sq ft
              </div>
              {building.completionDate && (
                <div>
                  <strong>Completion Date:</strong> {new Date(building.completionDate).toLocaleDateString()}
                </div>
              )}
              <div style={{ fontSize: '0.875rem', color: '#777', marginTop: '0.5rem' }}>
                📍 {building.lat.toFixed(4)}, {building.lng.toFixed(4)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
