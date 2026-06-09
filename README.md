# Website Profil Program Studi Teknik Elektro UPGRIS

React SPA — Vite + React Router v6

---

## 🚀 Cara Build & Deploy

### 1. Install dependensi
```bash
npm install
```

### 2. Development (lokal)
```bash
npm run dev
```
Buka http://localhost:5173

### 3. Build produksi
```bash
npm run build
```
Output ada di folder `dist/`

---

## 📁 Struktur Proyek

```
te-upgris/
├── index.html              ← Entry point (upload ke server utama)
├── src/
│   ├── App.jsx             ← Routing utama
│   ├── main.jsx            ← Bootstrap React
│   ├── index.css           ← Design system & global CSS
│   ├── data/
│   │   └── data.js         ← ⭐ FILE DATA UTAMA – edit di sini
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageHeader.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Profil.jsx
│       ├── Akademik.jsx
│       ├── Dosen.jsx
│       ├── Penelitian.jsx
│       ├── Berita.jsx
│       └── Pengumuman.jsx
└── public/
    └── favicon.svg
```

---

## ✏️ Cara Update Konten

### Update Berita / Pengumuman (rutin)
Edit file `src/data/data.js`:
- `beritaList` – tambah/edit item berita
- `pengumumanList` – tambah/edit pengumuman

Lalu rebuild: `npm run build`

### Integrasi API (opsional untuk berita dinamis)
Di `src/data/data.js`, ganti array statis `beritaList` dengan fetch:

```js
// Contoh fetch dari API/JSON eksternal
export async function fetchBerita() {
  const res = await fetch('https://your-api-host.com/berita.json')
  return res.json()
}
```

Lalu di komponen terkait gunakan `useEffect` + `useState`.

### Update Profil Dosen
Edit array `dosenList` di `src/data/data.js`.
Pastikan link `sinta` dan `scholar` diperbarui dengan ID yang benar.

---

## 🌐 Deployment (SPA di server tanpa akses penuh)

Karena ini SPA (Single Page App) dengan React Router, server harus dikonfigurasi
agar semua request dikembalikan ke `index.html`.

### Apache (.htaccess)
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Hosting JS/CSS di server lain
Setelah build, isi folder `dist/assets/` (JS dan CSS) dapat diupload ke CDN/hosting lain.
Lalu ubah path di `dist/index.html`:
```html
<!-- Ganti dari -->
<script type="module" crossorigin src="/assets/index-xxx.js"></script>
<!-- Menjadi -->
<script type="module" crossorigin src="https://cdn.your-host.com/assets/index-xxx.js"></script>
```

---

## 🎨 Desain

- **Palet:** Deep Navy `#0D1B3E` + Electric Blue `#1E6FD9` + Amber Accent `#F5A623`
- **Tipografi:** Playfair Display (heading) + Inter (body)
- **Responsif:** Mobile-first, breakpoint 768px & 480px
- **Aksesibilitas:** Focus visible, reduced motion support

---

## 📞 Kontak

Program Studi Teknik Elektro  
Universitas PGRI Semarang  
Jl. Sidodadi Timur No.24, Semarang  
teknikelektro@upgris.ac.id
