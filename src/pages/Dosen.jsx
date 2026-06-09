import PageHeader from '../components/PageHeader'
import { dosenList } from '../data/data'
import { ExternalLink, BookOpen, GraduationCap } from 'lucide-react'

function getInitials(name) {
  return name.match(/\b([A-Z])/g)?.slice(0, 2).join('') || 'DS'
}

export default function Dosen() {
  const dtps = dosenList.filter(d => d.kategori === 'DTPS')
  const lainnya = dosenList.filter(d => d.kategori !== 'DTPS')

  return (
    <>
      <PageHeader
        title="Dosen Program Studi"
        subtitle="Profil dosen tetap dan pengampu mata kuliah di Program Studi Teknik Elektro UPGRIS"
        breadcrumbs={[{ label: 'Dosen' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">DTPS</span>
            <h2 className="section-title">Dosen Tetap Program Studi</h2>
            <p className="section-desc">
              Dosen Tetap Program Studi (DTPS) adalah dosen yang bidang keahliannya sesuai
              dengan kompetensi inti Teknik Elektro.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {dtps.map((d) => (
              <div key={d.nidn} className="card" style={{ padding: '24px 28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 20, alignItems: 'start' }}>
                  {/* Avatar */}
                  <div style={{
                    width: 72, height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--navy) 0%, var(--electric) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.4rem', fontWeight: 800, color: 'white',
                    border: '3px solid var(--electric-light)',
                    flexShrink: 0,
                  }}>
                    {getInitials(d.nama)}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>
                      {d.nama}
                    </h3>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span className="badge badge-blue">{d.jabatan}</span>
                      <span className="badge badge-green">{d.bidang}</span>
                      {d.sertifikasi && d.sertifikasi !== '–' && (
                        <span className="badge badge-amber">Sertifikasi: {d.sertifikasi}</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: '0.82rem', color: 'var(--gray-500)' }}>
                        <GraduationCap size={14} color="var(--electric)" />
                        <span>{d.pendidikan}</span>
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>NIDN: <strong>{d.nidn}</strong></div>
                    </div>
                    {d.mataKuliah && (
                      <div style={{ marginTop: 10, display: 'flex', gap: 6, alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                        <BookOpen size={13} style={{ flexShrink: 0, marginTop: 2, color: 'var(--electric)' }} />
                        <span><strong style={{ color: 'var(--navy)' }}>MK: </strong>{d.mataKuliah}</span>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 120 }}>
                    {d.sinta && (
                      <a href={d.sinta} target="_blank" rel="noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '0.78rem', padding: '7px 14px', gap: 5 }}
                      >
                        <ExternalLink size={12} /> SINTA
                      </a>
                    )}
                    {d.scholar && (
                      <a href={d.scholar} target="_blank" rel="noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '0.78rem', padding: '7px 14px', gap: 5 }}
                      >
                        <ExternalLink size={12} /> Scholar
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lainnya.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Dosen Lain</span>
              <h2 className="section-title">Dosen Pengampu Lainnya</h2>
            </div>
            <div className="dosen-grid">
              {lainnya.map((d) => (
                <div className="dosen-card" key={d.nidn}>
                  <div className="dosen-avatar">{getInitials(d.nama)}</div>
                  <div className="dosen-name">{d.nama}</div>
                  <div className="dosen-nidn">NIDN {d.nidn}</div>
                  <div className="dosen-keahlian">{d.bidang}</div>
                  <div className="dosen-jabatan">{d.jabatan}</div>
                  <div className="dosen-links">
                    {d.sinta && <a href={d.sinta} target="_blank" rel="noreferrer" className="dosen-link-btn">SINTA</a>}
                    {d.scholar && <a href={d.scholar} target="_blank" rel="noreferrer" className="dosen-link-btn">Scholar</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
