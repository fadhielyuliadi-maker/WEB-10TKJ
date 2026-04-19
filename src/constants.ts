import { Student, LogEntry, GalleryImage } from './types';

export const STUDENTS_DATA: Student[] = [
  { id: '1', name: 'Ahmad Faisal', absentNumber: 1, photo: 'https://picsum.photos/seed/student1/300/300', status: 'Active Student' },
  { id: '2', name: 'Budi Santoso', absentNumber: 2, photo: 'https://picsum.photos/seed/student2/300/300', status: 'Active Student' },
  { id: '3', name: 'Citra Kirana', absentNumber: 3, photo: 'https://picsum.photos/seed/student3/300/300', status: 'Active Student' },
  { id: '4', name: 'Dewi Lestari', absentNumber: 4, photo: 'https://picsum.photos/seed/student4/300/300', status: 'Active Student' },
  { id: '5', name: 'Eka Wijaya', absentNumber: 5, photo: 'https://picsum.photos/seed/student5/300/300', status: 'Active Student' },
  { id: '6', name: 'Fadhil Pratama', absentNumber: 6, photo: 'https://picsum.photos/seed/student6/300/300', status: 'Active Student' },
  { id: '7', name: 'Gita Amalia', absentNumber: 7, photo: 'https://picsum.photos/seed/student7/300/300', status: 'Active Student' },
  { id: '8', name: 'Hadi Saputra', absentNumber: 8, photo: 'https://picsum.photos/seed/student8/300/300', status: 'Active Student' },
];

export const LOG_ENTRIES: LogEntry[] = [
  { id: '1', timestamp: '2026-03-01 08:00:00', event: 'System initialized. X TKJ Memory Log active.', type: 'info' },
  { id: '2', timestamp: '2026-03-05 10:30:00', event: 'Praktikum LAN pertama berhasil. Semua node terhubung.', type: 'success' },
  { id: '3', timestamp: '2026-03-12 14:00:00', event: 'Ujian konfigurasi router selesai. Success rate: 95%.', type: 'success' },
  { id: '4', timestamp: '2026-03-20 09:15:00', event: 'Instalasi sistem operasi Debian di lab server.', type: 'info' },
  { id: '5', timestamp: '2026-04-05 16:30:00', event: 'Foto kelas X TKJ 2026 diabadikan di cloud server.', type: 'info' },
  { id: '6', timestamp: '2026-04-10 11:00:00', event: 'Update database siswa: 32 users active.', type: 'info' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/seed/net1/800/600', title: 'Cabling Practice', category: 'Praktikum' },
  { id: '2', url: 'https://picsum.photos/seed/net2/800/600', title: 'Server Configuration', category: 'Praktikum' },
  { id: '3', url: 'https://picsum.photos/seed/event1/800/600', title: 'Flag Ceremony', category: 'Kegiatan Sekolah' },
  { id: '4', url: 'https://picsum.photos/seed/event2/800/600', title: 'Class Meeting', category: 'Kegiatan Sekolah' },
  { id: '5', url: 'https://picsum.photos/seed/chill1/800/600', title: 'Lunch Break', category: 'Momen Santai' },
  { id: '6', url: 'https://picsum.photos/seed/chill2/800/600', title: 'After School', category: 'Momen Santai' },
];
