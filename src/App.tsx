import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Users, 
  Image as ImageIcon, 
  UserCircle, 
  Home, 
  Search, 
  Cpu, 
  ChevronRight, 
  ArrowLeft,
  Activity,
  Shield,
  Zap,
  LayoutDashboard
} from 'lucide-react';
import { AppState, Student, LogEntry, GalleryImage } from './types';
import { STUDENTS_DATA, LOG_ENTRIES, GALLERY_IMAGES } from './constants';

// --- Sub-components ---

const SystemBoot = ({ onComplete }: { onComplete: () => void, key?: string }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const bootMessages = [
    "BIOS v2.06.26 initialized...",
    "Checking CPU: TKJ Core i9-TKJ @ 5.0GHz...",
    "Memory Check: 64GB DDR5 OK...",
    "Scanning Network Adapters...",
    "IPv4 Address: 192.168.10.254 established...",
    "IPv6 Address: fdc0:ffee:babe::1 established...",
    "Loading Class Database...",
    "Decrypting Memory Assets...",
    "Starting X TKJ GUI Environment...",
    "System Ready."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < bootMessages.length) {
        setLogs(prev => [...prev, bootMessages[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-6 font-mono">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-8 text-cyber-blue">
          <Cpu className="w-10 h-10 animate-pulse" />
          <h1 className="text-3xl font-display font-black tracking-widest text-glow-blue">BOOTING SYSTEM</h1>
        </div>
        <div className="space-y-2 h-[300px] overflow-hidden">
          {logs.map((log, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="text-cyber-purple flex gap-4"
            >
              <span className="opacity-50">[{new Date().toLocaleTimeString()}]</span>
              <span className={i === logs.length - 1 ? "text-white" : ""}>{log}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 h-2 bg-cyber-dark-purple overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-cyber-purple w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: bootMessages.length * 0.3, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
};

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full max-w-7xl mx-auto p-4 md:p-8 pt-24"
  >
    {children}
  </motion.div>
);

// --- Main Pages ---

const HomePage = ({ navigate }: { navigate: (s: AppState) => void, key?: string }) => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <motion.div 
          className="mb-12"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <div className="glitch-wrapper mb-4">
            <h1 
              data-text="X TKJ CLASS" 
              className="text-6xl md:text-8xl font-black text-glow-purple glitch-text"
            >
              X TKJ CLASS
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-cyber-blue font-display italic tracking-widest mb-2">
            “BELAJAR JARINGAN, BANGUN MASA DEPAN”
          </p>
          <div className="h-1 w-48 bg-cyber-purple mx-auto opacity-50 blur-sm" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {[
            { id: 'album', icon: ImageIcon, label: 'ALBUM KELAS', color: 'purple' },
            { id: 'students', icon: Users, label: 'DATA SISWA', color: 'blue' },
            { id: 'teacher', icon: UserCircle, label: 'WALI KELAS', color: 'purple' },
            { id: 'logs', icon: Terminal, label: 'MEMORY LOG', color: 'blue' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id as AppState)}
              className={`
                group relative p-8 glass-panel overflow-hidden transition-all duration-300
                hover:border-cyber-${item.color} border-glow-${item.color}
                active:scale-95
              `}
            >
              <div className={`absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity`}>
                <item.icon className="w-24 h-24" />
              </div>
              <item.icon className={`w-10 h-10 mb-4 text-cyber-${item.color}`} />
              <h3 className="text-xl font-bold mb-2 tracking-wider group-hover:text-glow-white">
                {item.label}
              </h3>
              <div className="flex items-center text-xs font-mono opacity-60">
                ACCESS SYSTEM <ChevronRight className="w-3 h-3 ml-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

const TeacherPage = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center glass-panel p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-cyber-purple" />
          <div className="relative group">
            <div className="absolute inset-0 bg-cyber-purple blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src="https://picsum.photos/seed/admin/400/400" 
              alt="Class Administrator" 
              className="w-64 h-64 object-cover rounded-full border-4 border-cyber-purple border-glow-purple relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-xs font-mono rounded-full mb-6">
              <Shield className="w-3 h-3" /> CLASS ADMINISTRATOR
            </div>
            <h2 className="text-5xl font-black mb-4 tracking-tighter">BUDI DERMAWAN, S.T.</h2>
            <div className="space-y-4 text-lg">
              <div className="flex flex-col">
                <span className="text-cyber-blue font-mono text-xs uppercase tracking-widest opacity-60">Department</span>
                <span className="font-display font-medium">Computer & Network Engineering</span>
              </div>
              <div className="flex flex-col">
                <span className="text-cyber-blue font-mono text-xs uppercase tracking-widest opacity-60">Specialization</span>
                <span className="font-display font-medium">MikroTik & Cisco System Administration</span>
              </div>
              <div className="mt-8 p-6 bg-white/5 border-l-4 border-cyber-blue italic text-white/80">
                “Disiplin adalah dasar dari seorang engineer sukses. Bangun fondasi yang kuat, maka jaringanmu takkan pernah putus.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredStudents = STUDENTS_DATA.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-4xl font-black text-glow-blue mb-2">USER DATABASE</h2>
            <p className="text-cyber-blue font-mono text-sm opacity-60">Total Active Nodes: {STUDENTS_DATA.length}</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input 
              type="text" 
              placeholder="Search student ID or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStudents.map((student) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-panel group hover:border-cyber-blue transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={student.photo} 
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-cyber-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono">
                    #{student.absentNumber.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-cyber-blue transition-colors">{student.name}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono opacity-60 uppercase">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {student.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

const AlbumPage = () => {
  const categories = ['All', 'Praktikum', 'Kegiatan Sekolah', 'Momen Santai'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-black text-glow-purple mb-6">CLOUD ASSETS</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2 rounded-full border text-xs font-mono transition-all
                  ${activeCategory === cat 
                    ? 'bg-cyber-purple border-cyber-purple text-white' 
                    : 'border-white/10 text-white/60 hover:border-cyber-purple/50'}
                `}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative group overflow-hidden rounded-2xl glass-panel break-inside-avoid shadow-xl shadow-black/40"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full block transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-cyber-purple mb-1">{img.category}</span>
                  <h4 className="text-xl font-bold">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

const LogsPage = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-4xl font-black text-glow-blue mb-2 flex items-center gap-4">
            <Activity className="w-10 h-10 text-cyber-blue" /> SYSTEM_LOGS.EXE
          </h2>
          <p className="text-cyber-blue font-mono text-sm opacity-60 italic">Tracking memories in real-time...</p>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden font-mono text-sm">
          <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-bottom border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-[10px] text-white/40 tracking-widest uppercase">Console - Terminal v4.0</div>
          </div>
          <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
            {LOG_ENTRIES.map((log) => (
              <div key={log.id} className="flex gap-4 group">
                <span className="text-white/30 whitespace-nowrap">[{log.timestamp}]</span>
                <span className={`
                  ${log.type === 'success' ? 'text-green-400' : ''}
                  ${log.type === 'error' ? 'text-red-400' : ''}
                  ${log.type === 'warning' ? 'text-yellow-400' : ''}
                  ${log.type === 'info' ? 'text-cyber-blue' : ''}
                `}>
                  <span className="opacity-40 mr-2">$</span>
                  {log.event}
                </span>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="hidden group-hover:block ml-auto text-[10px] text-white/20 uppercase"
                >
                  EVENT_CAPTURED_OK
                </motion.div>
              </div>
            ))}
            <div className="flex gap-4">
              <span className="text-white/30 whitespace-nowrap">[{new Date().toLocaleTimeString()}]</span>
              <span className="text-white">
                <span className="opacity-40 mr-2">$</span>
                <span className="animate-pulse">_</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

// --- Main App Component ---

export default function App() {
  const [state, setState] = useState<AppState>('booting');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      <div className="scanline" />
      
      <AnimatePresence mode="wait">
        {state === 'booting' && (
          <SystemBoot key="boot" onComplete={() => setState('home')} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${state === 'booting' ? 'opacity-0' : 'opacity-100'}`}>
        {/* Navigation Rail */}
        <nav className="fixed top-0 left-0 right-0 z-40 p-4 md:p-6 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/5">
          <button 
            onClick={() => setState('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-cyber-purple/20 border border-cyber-purple/50 rounded-lg flex items-center justify-center group-hover:bg-cyber-purple group-hover:shadow-[0_0_15px_rgba(157,0,255,0.5)] transition-all">
              <Zap className="w-5 h-5 text-cyber-purple group-hover:text-white" />
            </div>
            <div>
              <h1 className="font-display font-black text-xl tracking-widest text-glow-purple leading-none">X TKJ</h1>
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-tighter">Memory Access System v1.0</span>
            </div>
          </button>

          <div className="flex gap-2">
            {state !== 'home' && (
              <button 
                onClick={() => setState('home')}
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyber-blue hover:border-cyber-blue transition-all group"
              >
                <Home className="w-5 h-5 group-hover:text-black" />
              </button>
            )}
            <div className="hidden md:flex gap-2">
              {[
                { id: 'album', icon: ImageIcon },
                { id: 'students', icon: Users },
                { id: 'teacher', icon: UserCircle },
                { id: 'logs', icon: Terminal },
              ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => setState(item.id as AppState)}
                  className={`
                    p-3 border rounded-xl transition-all relative group
                    ${state === item.id 
                      ? 'bg-cyber-purple border-cyber-purple text-white shadow-[0_0_10px_rgba(157,0,255,0.3)]' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'}
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyber-purple text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase whitespace-nowrap z-50">
                    {item.id}
                  </div>
                </button>
              ))}
            </div>
            <div className="w-px h-10 bg-white/10 mx-2" />
            <div className="flex flex-col items-end justify-center">
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="opacity-60">ADMIN_ONLINE</span>
              </div>
              <span className="text-[10px] font-mono opacity-40">UID: TKJ-2026-X</span>
            </div>
          </div>
        </nav>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyber-purple/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-blue/10 blur-[120px] rounded-full" />
        </div>

        <main className="relative z-10 min-h-screen">
          <AnimatePresence mode="wait">
            {state === 'home' && <HomePage key="home" navigate={setState} />}
            {state === 'teacher' && <TeacherPage key="teacher" />}
            {state === 'students' && <StudentsPage key="students" />}
            {state === 'album' && <AlbumPage key="album" />}
            {state === 'logs' && <LogsPage key="logs" />}
          </AnimatePresence>
        </main>

        {/* Footer info block */}
        <footer className="relative z-20 border-t border-white/5 bg-black/40 backdrop-blur-md p-8 pt-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <LayoutDashboard className="w-8 h-8 text-cyber-purple opacity-40" />
              <div>
                <h4 className="font-display font-medium text-white/80">X TKJ CLASS SYSTEM</h4>
                <p className="text-xs text-white/40 font-mono">ESTD 2026 // NODE_LOCATION: LAB_TKJ_01</p>
              </div>
            </div>
            <div className="flex gap-8 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              <div className="flex flex-col gap-1">
                <span className="text-white/60">System Security</span>
                <span>Active Protection</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60">Data Integrity</span>
                <span>Verified 100%</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/60">Connection</span>
                <span>High Speed Optic</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

