## ⚡ Drawing COLLAB BOARD - Real-time

![Platform](https://img.shields.io/badge/Platform-Termux%20%7C%20Linux%20%7C%20Windows-00f2ff?style=for-the-badge)
![Engine](https://img.shields.io/badge/Engine-Node.js%20%26%20Socket.io-7000ff?style=for-the-badge)
![Security](https://img.shields.io/badge/Unit-123Tool%20Cyber-black?style=for-the-badge)

**Drawing Collab Board** adalah papan tulis digital real-time untuk kolaborasi tim. Menggunakan teknologi WebSocket (Socket.io) untuk sinkronisasi koordinat kursor dan gambar secara instan antar perangkat.

---

## 🛠️ Persiapan Awal (Prerequisites)

Pastikan **Node.js** sudah terinstall di sistem kamu.
- Cek versi: `node -v`
- Cek npm: `npm -v`

---

## 📲 Panduan Instalasi via TERMUX (Android)

Jalankan perintah berikut secara berurutan di terminal Termux kamu:

1. **Update & Install Node.js:**
   ```bash
   pkg update && pkg upgrade
   pkg install nodejs
   git clone [ https://github.com/123tool/Drawing-Collab-Board.git]
   ```
2. **Clone/Buat Folder Proyek:**
   ```
   mkdir Drawing-Collab-Board && cd Drawing-Collab-Board
   ```
3. **Inisialisasi & Install Library:**
   ```
   npm init -y
   npm install express socket.io
   ```
4. **Masukan File: Pastikan file server.js dan folder public sudah ada di dalam direktori spy-board.**
5. **Jalankan Server:**
   ```
   node server.js
   ```
6. **Akses: Buka browser di HP kamu, ketik: http://localhost:8080**

## Instalasi via CMD/PowerShell (Windows)
1. **Download Node.js: Ambil installer di nodejs.org.**
2. **Setup Folder: Buka CMD, buat folder dan masuk ke dalamnya.**
   ```
   mkdir Drawing-Collab-Board
   cd Drawing-Collab-Board
3. **Install Dependensi:**
   ```
   npm init -y
   npm install express socket.io
4. **Running:**
   ```
   node server.js
   ```
## Cara Menghubungkan Teman (Networking)
​**Agar orang lain bisa ikut menggambar di papan kamu:**

​1. Satu Jaringan (WiFi) : 
Berikan alamat IP lokal kamu 
```
(Contoh: http://192.168.1.5:8080).
```

2. Beda Jaringan (Internet) :
Gunakan tunnel seperti Ngrok atau Cloudflare Tunnel.
```
​Contoh Ngrok : ngrok http 8080
```

​Bagikan link .ngrok.io yang muncul ke tim kamu.


## ​⚠️ Troubleshooting

**​Error :**
Address already in use : 
Artinya port 8080 dipakai aplikasi lain. Ubah angka 8080 di server.js menjadi 9000 atau lainnya.

**​Socket.io Not Found :**
Pastikan kamu sudah menjalankan npm install socket.io di folder yang benar (folder tempat server.js berada).
