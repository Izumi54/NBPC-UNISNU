// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const os = require('os');

// Konfigurasi dasar
const dev = process.env.NODE_ENV !== 'production';
const port = 8080; // Port 8080 yang lebih jarang diblokir
const hostname = '0.0.0.0'; // Listen di semua IP

// Mendapatkan alamat IP lokal untuk informasi
const getNetworkIPs = () => {
  const interfaces = os.networkInterfaces();
  const results = [];
  
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Hanya ambil IPv4 dan bukan localhost
      if (iface.family === 'IPv4' && !iface.internal) {
        results.push(iface.address);
      }
    }
  }
  
  return results;
};

// Inisialisasi aplikasi Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

// Persiapkan dan jalankan server
app.prepare().then(() => {
  createServer((req, res) => {
    // Menambahkan header untuk cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle permintaan dengan Next.js
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    
    // Tampilkan alamat IP yang dapat diakses
    console.log('\n====================================');
    console.log('\x1b[32m%s\x1b[0m', `✅ Server berjalan di: http://localhost:${port}`);
    
    // Tampilkan semua alamat IP jaringan untuk akses dari perangkat lain
    const networkIPs = getNetworkIPs();
    if (networkIPs.length > 0) {
      console.log('\n\x1b[36m%s\x1b[0m', '📱 Akses dari perangkat lain:');
      networkIPs.forEach(ip => {
        console.log(`   http://${ip}:${port}`);
      });
    }
    
    console.log('\n====================================\n');
  });
}); 