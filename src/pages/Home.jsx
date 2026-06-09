import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen,
  Trophy, Bell, ChevronRight, Zap, GraduationCap, Star
} from 'lucide-react'
import { beritaList, pengumumanList, dosenList, prestasiMahasiswa, prodiInfo } from '../data/data'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function formatDateShort(iso) {
  const d = new Date(iso)
  return {
    day: d.toLocaleDateString('id-ID', { day: '2-digit' }),
    month: d.toLocaleDateString('id-ID', { month: 'short' }),
  }
}

const kategoriColor = {
  Prestasi: 'badge-amber',
  Akademik: 'badge-blue',
  Penelitian: 'badge-green',
  Pengabdian: 'badge-green',
  Kerjasama: 'badge-blue',
  Pengumuman: 'badge-gray',
}

export default function Home() {
  const latestBerita = beritaList.slice(0, 3)
  const latestPengumuman = pengumumanList.slice(0, 4)
  const featuredDosen = dosenList.slice(0, 4)

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="container">
          <div className="announcement-items">
            <div className="announcement-item">
              <Bell size={13} />
              <span><strong>PMB 2025/2026:</strong> Pendaftaran mahasiswa baru dibuka — </span>
              <a href="https://pmb.upgris.ac.id" target="_blank" rel="noreferrer">Daftar Sekarang →</a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <Zap size={12} />
              Program Studi S1 – Terakreditasi Baik BAN-PT
            </div>
            <h1>Teknik Elektro</h1>
            <div className="hero-sub">Universitas PGRI Semarang</div>
            <p className="hero-desc">
              Mencetak insinyur elektro yang kompeten dan inovatif melalui
              pendidikan berbasis riset, kemitraan industri nasional dan
              internasional, serta pengabdian nyata kepada masyarakat.
            </p>
            <div className="hero-actions">
              <a href="https://pmb.upgris.ac.id" target="_blank" rel="noreferrer" className="btn btn-accent">
                Daftar Mahasiswa Baru <ArrowRight size={16} />
              </a>
              <Link to="/profil" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                Kenali Prodi Kami
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong className="accent">133</strong>
                <span>Mahasiswa Aktif</span>
              </div>
              <div className="hero-stat">
                <strong>8</strong>
                <span>Dosen Tetap PS</span>
              </div>
              <div className="hero-stat">
                <strong>12+</strong>
                <span>Mitra Internasional</span>
              </div>
              <div className="hero-stat">
                <strong>3.32</strong>
                <span>IPK Rata-rata Lulusan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <div className="info-strip">
        <div className="container">
          <div className="info-item">
            <div className="info-icon"><BookOpen size={20} /></div>
            <div className="info-text">
              <strong>Program Sarjana (S1)</strong>
              <span>144 SKS / 8 Semester</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><Star size={20} /></div>
            <div className="info-text">
              <strong>Akreditasi BAN-PT</strong>
              <span>Terakreditasi Baik — 2021</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><GraduationCap size={20} /></div>
            <div className="info-text">
              <strong>Gelar Lulusan</strong>
              <span>Sarjana Teknik (S.T.)</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><Trophy size={20} /></div>
            <div className="info-text">
              <strong>Prestasi Nasional</strong>
              <span>KRI Finalis 2024 & 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* PENGUMUMAN + BERITA */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'start' }}>
            {/* Pengumuman */}
            <div>
              <div className="section-header">
                <span className="section-label">Info Mahasiswa</span>
                <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Pengumuman</h2>
              </div>
              <div className="pengumuman-list">
                {latestPengumuman.map((item) => {
                  const { day, month } = formatDateShort(item.tanggal)
                  return (
                    <div className="pengumuman-item" key={item.id}>
                      <div className="pengumuman-date">
                        <div className="day">{day}</div>
                        <div className="month">{month}</div>
                      </div>
                      <div className="pengumuman-body">
                        <div className="pengumuman-title">{item.judul}</div>
                        <div className="pengumuman-desc">{item.deskripsi.slice(0, 80)}…</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div style={{ marginTop: 16 }}>
                <Link to="/pengumuman" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Lihat Semua Pengumuman
                </Link>
              </div>
            </div>

            {/* Berita */}
            <div>
              <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <span className="section-label">Aktivitas Prodi</span>
                  <h2 className="section-title" style={{ fontSize: '1.6rem', marginBottom: 0 }}>Berita Terkini</h2>
                </div>
                <Link to="/berita" className="btn btn-outline" style={{ fontSize: '0.82rem' }}>
                  Semua Berita <ArrowRight size={14} />
                </Link>
              </div>
              <div className="news-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {latestBerita.map((item) => (
                  <div className="news-card" key={item.id}>
                    <div className="news-card-img">
                      <div className="news-card-img-label">
                        <span className={`badge ${kategoriColor[item.kategori] || 'badge-blue'}`}>
                          {item.kategori}
                        </span>
                      </div>
                      <BookOpen size={32} style={{ opacity: 0.3, color: 'white' }} />
                    </div>
                    <div className="news-card-body">
                      <div className="news-card-meta">
                        <span>{formatDate(item.tanggal)}</span>
                      </div>
                      <div className="news-card-title">{item.judul}</div>
                      <Link to={`/berita/${item.id}`} className="news-card-link">
                        Baca selengkapnya <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS DARK */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>Dalam Angka</span>
            <h2 className="section-title" style={{ color: 'white' }}>Rekam Jejak Akademik</h2>
          </div>
          <div className="stats-grid">
            {[
              { n: '87%', l: 'Kesesuaian Bidang Kerja Lulusan' },
              { n: '3.32', l: 'IPK Rata-rata Lulusan' },
              { n: '20+', l: 'Mitra Industri & Institusi' },
              { n: '18+', l: 'Publikasi 3 Tahun Terakhir' },
              { n: '133', l: 'Mahasiswa Aktif TS' },
              { n: '4', l: 'Prestasi Nasional Mahasiswa' },
            ].map((s) => (
              <div className="stat-card" key={s.l}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOSEN HIGHLIGHT */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <span className="section-label">Sumber Daya Manusia</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Dosen Pengampu</h2>
            </div>
            <Link to="/dosen" className="btn btn-outline">
              Lihat Semua <ArrowRight size={14} />
            </Link>
          </div>
          <div className="dosen-grid">
            {featuredDosen.map((d) => (
              <div className="dosen-card" key={d.nidn}>
                <div className="dosen-avatar">
                  {d.nama.match(/\b([A-Z])/g)?.slice(0, 2).join('') || 'DS'}
                </div>
                <div className="dosen-name">{d.nama}</div>
                <div className="dosen-nidn">NIDN {d.nidn}</div>
                <div className="dosen-keahlian">{d.bidang}</div>
                <div className="dosen-jabatan">{d.jabatan} · {d.pendidikan.split('–')[0].trim()}</div>
                <div className="dosen-links">
                  {d.sinta && (
                    <a href={d.sinta} target="_blank" rel="noreferrer" className="dosen-link-btn">SINTA</a>
                  )}
                  {d.scholar && (
                    <a href={d.scholar} target="_blank" rel="noreferrer" className="dosen-link-btn">Scholar</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTASI */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Keunggulan</span>
            <h2 className="section-title">Prestasi Mahasiswa</h2>
            <p className="section-desc">Mahasiswa kami aktif berkompetisi dan meraih prestasi di tingkat wilayah hingga nasional.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {prestasiMahasiswa.map((p, i) => (
              <div className="card" key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'linear-gradient(135deg, var(--accent) 0%, #F57C00 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Trophy size={20} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)', marginBottom: 4 }}>{p.nama}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginBottom: 8 }}>{p.tahun}</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <span className="badge badge-amber">{p.tingkat}</span>
                    <span className="badge badge-green">{p.pencapaian}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--electric) 0%, var(--navy) 100%)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: 16, fontFamily: 'Playfair Display, serif' }}>
            Bergabunglah Bersama Kami
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: 520, margin: '0 auto 32px' }}>
            Jadilah bagian dari komunitas akademik Teknik Elektro UPGRIS dan wujudkan karier impianmu di bidang rekayasa kelistrikan.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://pmb.upgris.ac.id" target="_blank" rel="noreferrer" className="btn btn-accent">
              Daftar PMB 2025/2026 <ArrowRight size={16} />
            </a>
            <Link to="/profil" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
              Informasi Prodi
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
