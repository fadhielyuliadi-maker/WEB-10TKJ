
export type Student = {
  id: string;
  name: string;
  absentNumber: number;
  photo: string;
  status: 'Active Student' | 'On Leave' | 'Alumnus';
};

export type LogEntry = {
  id: string;
  timestamp: string;
  event: string;
  type: 'success' | 'info' | 'warning' | 'error';
};

export type GalleryImage = {
  id: string;
  url: string;
  title: string;
  category: 'Praktikum' | 'Kegiatan Sekolah' | 'Momen Santai';
};

export type AppState = 'booting' | 'home' | 'teacher' | 'students' | 'album' | 'logs';
