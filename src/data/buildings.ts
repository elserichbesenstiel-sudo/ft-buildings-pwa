import { Building } from '../types/building';

export const demoBuildings: Building[] = [
  {
    id: '1',
    name: 'FoodTec Distribution Center A',
    address: '123 Industrial Blvd, San Francisco, CA 94103',
    lat: 37.7749,
    lng: -122.4194,
    type: 'Distribution Center',
    status: 'Active',
    size: 50000,
    completionDate: '2022-06-15'
  },
  {
    id: '2',
    name: 'FoodTec Processing Plant B',
    address: '456 Manufacturing Dr, Oakland, CA 94607',
    lat: 37.8044,
    lng: -122.2712,
    type: 'Processing Plant',
    status: 'Active',
    size: 75000,
    completionDate: '2021-11-20'
  },
  {
    id: '3',
    name: 'FoodTec Warehouse C',
    address: '789 Storage Ave, San Jose, CA 95110',
    lat: 37.3382,
    lng: -121.8863,
    type: 'Warehouse',
    status: 'Under Construction',
    size: 100000,
    completionDate: '2025-03-01'
  },
  {
    id: '4',
    name: 'FoodTec Cold Storage D',
    address: '321 Refrigeration Way, Berkeley, CA 94704',
    lat: 37.8715,
    lng: -122.2730,
    type: 'Cold Storage',
    status: 'Active',
    size: 40000,
    completionDate: '2023-01-10'
  },
  {
    id: '5',
    name: 'FoodTec Innovation Hub',
    address: '555 Tech Park Rd, Palo Alto, CA 94301',
    lat: 37.4419,
    lng: -122.1430,
    type: 'Research & Development',
    status: 'Planned',
    size: 30000
  }
];
