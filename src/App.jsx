import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Akademik from './pages/Akademik'
import Dosen from './pages/Dosen'
import Penelitian from './pages/Penelitian'
import { BeritaList, BeritaDetail } from './pages/Berita'
import Pengumuman from './pages/Pengumuman'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/akademik" element={<Akademik />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/penelitian" element={<Penelitian />} />
          <Route path="/berita" element={<BeritaList />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--gray-500)' }}>
              <h1 style={{ fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--navy)', marginBottom: 16 }}>
                404 – Halaman Tidak Ditemukan
              </h1>
                    <Link
        to="/"
        className="btn btn-primary"
        style={{ textDecoration: 'none' }}
      >
        ← Kembali ke Beranda
      </Link></div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
