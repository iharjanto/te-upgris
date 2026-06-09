import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { penelitianList, publikasiList, kerjasamaList } from '../data/data'
import { Globe, Building, MapPin } from 'lucide-react'

const tingkatIcon = {
  Internasional: Globe,
  Nasional: Building,
  Lokal: MapPin,
}
const tingkatColor = {
  Internasional: { bg: '#EBF3FF', icon: 'var(--electric)' },
  Nasional: { bg: '#E8F8F0', icon: '#1A7A4A' },
  Lokal: { bg: '#FFF5E0', icon: '#B37700' },
}

export default function Penelitian() {
  const [tab, setTab] = useState('penelitian')

  const penelitian = penelitianList.filter(p => p.jenis === 'Penelitian')
  const pkm = penelitianList.filter(p => p.jenis === 'PkM')

  return (
    <>
      <PageHeader
        title="Penelitian & Pengabdian"
        subtitle="Rekam jejak riset, publikasi ilmiah, dan pengabdian kepada masyarakat oleh dosen dan mahasiswa"
        breadcrumbs={[{ label: 'Penelitian & PkM' }]}
      />

      <section className="section">
        <div className="container">
          <div className="tabs">
            {[
              { id: 'penelitian', label: 'Penelitian Dosen' },
              { id: 'pkm', label: 'Pengabdian Masyarakat' },
              { id: 'publikasi', label: 'Publikasi' },
              { id: 'kerjasama', label: 'Kerjasama' },
            ].map((t) => (
              <button
                key={t.id}
                className={`tab-btn${tab === t.id ? ' active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'penelitian' && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                  Berikut adalah penelitian yang dilaksanakan oleh dosen Program Studi Teknik Elektro UPGRIS dalam 3 tahun terakhir.
                </p>
              </div>
              <div className="pub-table-wrap">
                <table className="pub-table">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Judul Penelitian</th>
                      <th>Dosen</th>
                      <th>Peta Jalan</th>
                      <th>Tahun</th>
                      <th>Dana</th>
                      <th>Sumber</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penelitian.map((p, i) => (
                      <tr key={i}>
                        <td style={{ color: 'var(--gray-300)', fontWeight: 700 }}>{i + 1}</td>
                        <td style={{ fontWeight: 600 }}>{p.judul}</td>
                        <td style={{ fontSize: '0.8rem', color: 'var(--gray-500)', minWidth: 160 }}>{p.dosen}</td>
                        <td><span className="badge badge-blue" style={{ fontSize: '0.7rem' }}>{p.roadmap}</span></td>
                        <td><span className="badge badge-gray">{p.tahun}</span></td>
                        <td style={{ fontWeight: 600 }}>{p.dana}</td>
                        <td style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>{p.sumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'pkm' && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                  Kegiatan Pengabdian kepada Masyarakat (PkM) yang dilaksanakan oleh dosen Program Studi Teknik Elektro UPGRIS.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {pkm.map((p, i) => (
                  <div className="card" key={i} style={{ padding: 22, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44, height: 44, background: '#E8F8F0', borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#1A7A4A', fontSize: '1rem',
                    }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{p.judul}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginBottom: 8 }}>
                        Dosen Pelaksana: <strong style={{ color: 'var(--navy)' }}>{p.dosen}</strong>
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <span className="badge badge-gray">{p.tahun}</span>
                        <span className="badge badge-green">{p.dana}</span>
                        <span className="badge badge-blue">{p.sumber}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'publikasi' && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                  Publikasi ilmiah dosen DTPS Program Studi Teknik Elektro UPGRIS dalam 3 tahun terakhir.
                </p>
              </div>
              <div className="pub-table-wrap">
                <table className="pub-table">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Judul Publikasi</th>
                      <th>Dosen</th>
                      <th>Jenis</th>
                      <th>Tahun</th>
                      <th>Sitasi</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publikasiList.map((p, i) => (
                      <tr key={i}>
                        <td style={{ color: 'var(--gray-300)', fontWeight: 700 }}>{i + 1}</td>
                        <td style={{ fontWeight: 600, fontSize: '0.85rem' }}>{p.judul}</td>
                        <td style={{ fontSize: '0.78rem', color: 'var(--gray-500)', minWidth: 140 }}>{p.dosen}</td>
                        <td>
                          <span className={`badge ${p.jenis.includes('Internasional') ? 'badge-blue' : p.jenis.includes('Scopus') ? 'badge-green' : 'badge-gray'}`}
                            style={{ fontSize: '0.68rem', whiteSpace: 'nowrap' }}>
                            {p.jenis.replace('Jurnal ', 'J. ').replace('Prosiding ', 'Pros. ')}
                          </span>
                        </td>
                        <td><span className="badge badge-gray">{p.tahun}</span></td>
                        <td style={{ fontWeight: 700, color: p.sitasi ? 'var(--electric)' : 'var(--gray-300)', textAlign: 'center' }}>
                          {p.sitasi ?? '–'}
                        </td>
                        <td style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>{p.keterangan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'kerjasama' && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                  Mitra kerja sama Program Studi Teknik Elektro UPGRIS dalam bidang pendidikan, penelitian, dan pengabdian.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
                {['Semua', 'Internasional', 'Nasional', 'Lokal'].map((f) => (
                  <span key={f} className={`badge ${f === 'Semua' ? 'badge-blue' : f === 'Internasional' ? 'badge-blue' : f === 'Nasional' ? 'badge-green' : 'badge-amber'}`}
                    style={{ padding: '5px 14px', cursor: 'pointer', fontSize: '0.8rem' }}>
                    {f} {f !== 'Semua' && `(${kerjasamaList.filter(k => k.tingkat === f).length})`}
                  </span>
                ))}
              </div>
              <div className="kerjasama-list">
                {kerjasamaList.map((k, i) => {
                  const Icon = tingkatIcon[k.tingkat] || Globe
                  const color = tingkatColor[k.tingkat] || tingkatColor.Lokal
                  return (
                    <div className="kerjasama-item" key={i}>
                      <div className="kerjasama-icon" style={{ background: color.bg }}>
                        <Icon size={18} color={color.icon} />
                      </div>
                      <div className="kerjasama-info">
                        <div className="kerjasama-name">{k.mitra}</div>
                        <div className="kerjasama-type">{k.jenis} · {k.manfaat}</div>
                      </div>
                      <span className={`badge ${k.tingkat === 'Internasional' ? 'badge-blue' : k.tingkat === 'Nasional' ? 'badge-green' : 'badge-amber'}`}>
                        {k.tingkat}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
