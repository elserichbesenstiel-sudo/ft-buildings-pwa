export interface Building {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
  status: 'Active' | 'Under Construction' | 'Planned';
  size: number;
  completionDate?: string;
}
