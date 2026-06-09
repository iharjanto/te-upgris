import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { beritaList } from '../data/data'
import { Calendar, User, ChevronRight } from 'lucide-react'

const kategoriColor = {
  Prestasi: 'badge-amber',
  Akademik: 'badge-blue',
  Penelitian: 'badge-green',
  Pengabdian: 'badge-green',
  Kerjasama: 'badge-blue',
  Pengumuman: 'badge-gray',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function BeritaList() {
  return (
    <>
      <PageHeader
        title="Berita & Kegiatan"
        subtitle="Aktivitas akademik, penelitian, pengabdian, dan prestasi Program Studi Teknik Elektro UPGRIS"
        breadcrumbs={[{ label: 'Berita' }]}
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            {['Semua', 'Akademik', 'Penelitian', 'Pengabdian', 'Prestasi', 'Kerjasama'].map(k => (
              <span key={k} className={`badge ${k === 'Semua' ? 'badge-blue' : 'badge-gray'}`}
                style={{ padding: '6px 14px', cursor: 'pointer', fontSize: '0.8rem' }}>
                {k}
              </span>
            ))}
          </div>

          <div className="news-grid">
            {beritaList.map((item) => (
              <div className="news-card" key={item.id}>
                <div className="news-card-img" style={{ height: 200 }}>
                  <div className="news-card-img-label">
                    <span className={`badge ${kategoriColor[item.kategori] || 'badge-blue'}`}>
                      {item.kategori}
                    </span>
                  </div>
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <Calendar size={12} />
                    <span>{formatDate(item.tanggal)}</span>
                    <span>·</span>
                    <User size={12} />
                    <span>{item.penulis}</span>
                  </div>
                  <div className="news-card-title">{item.judul}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--gray-500)', lineHeight: 1.6, marginBottom: 14 }}>
                    {item.ringkasan.slice(0, 100)}…
                  </p>
                  <Link to={`/berita/${item.id}`} className="news-card-link">
                    Baca selengkapnya <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BeritaDetail() {
  const { id } = useParams()
  const item = beritaList.find(b => b.id === Number(id))

  if (!item) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--gray-500)' }}>
        <h2>Berita tidak ditemukan.</h2>
        <Link to="/berita" className="btn btn-primary" style={{ marginTop: 20 }}>← Kembali</Link>
      </div>
    )
  }

  const others = beritaList.filter(b => b.id !== item.id).slice(0, 3)

  return (
    <>
      <PageHeader
        title={item.judul}
        subtitle=""
        breadcrumbs={[{ label: 'Berita', path: '/berita' }, { label: item.kategori }]}
      />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
                <span className={`badge ${kategoriColor[item.kategori] || 'badge-blue'}`}>{item.kategori}</span>
                <span style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: '0.82rem', color: 'var(--gray-500)' }}>
                  <Calendar size={13} />{formatDate(item.tanggal)}
                </span>
                <span style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: '0.82rem', color: 'var(--gray-500)' }}>
                  <User size={13} />{item.penulis}
                </span>
              </div>

              <div style={{
                height: 280, borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--navy) 0%, var(--electric) 100%)',
                marginBottom: 32,
              }} />

              <div style={{ lineHeight: 1.85, color: 'var(--gray-700)', fontSize: '0.97rem' }}>
                <p style={{ marginBottom: 16 }}>{item.ringkasan}</p>
                <p style={{ marginBottom: 16 }}>
                  Program Studi Teknik Elektro UPGRIS terus berkomitmen untuk menghasilkan lulusan yang kompeten
                  dan berdaya saing melalui berbagai kegiatan akademik, penelitian, dan pengabdian masyarakat.
                </p>
                <p>
                  Dengan dukungan mitra industri dan institusi pendidikan nasional maupun internasional,
                  Program Studi Teknik Elektro UPGRIS terus meningkatkan kualitas pendidikannya.
                </p>
              </div>

              <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                <Link to="/berita" className="btn btn-outline">← Kembali ke Berita</Link>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy)', marginBottom: 16 }}>
                Berita Lainnya
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {others.map((o) => (
                  <Link to={`/berita/${o.id}`} key={o.id} style={{
                    display: 'flex', gap: 14, padding: '14px',
                    borderRadius: 'var(--radius)', border: '1px solid var(--border)',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: 8, flexShrink: 0,
                      background: 'linear-gradient(135deg, var(--navy) 0%, var(--electric) 100%)',
                    }} />
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.4, marginBottom: 4 }}>
                        {o.judul}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)' }}>{formatDate(o.tanggal)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
