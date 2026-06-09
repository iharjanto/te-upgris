import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { kurikulumData } from '../data/data'

const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Akademik() {
  const [activeSem, setActiveSem] = useState(1)

  const mks = kurikulumData.filter(k => k.semester === activeSem)
  const totalSks = mks.reduce((s, k) => s + k.sks, 0)
  const totalAll = kurikulumData.reduce((s, k) => s + k.sks, 0)

  return (
    <>
      <PageHeader
        title="Akademik"
        subtitle="Kurikulum, struktur mata kuliah, dan informasi akademik Program Studi Teknik Elektro UPGRIS"
        breadcrumbs={[{ label: 'Akademik' }]}
      />

      <section className="section">
        <div className="container">
          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }}>
            {[
              { n: '8', l: 'Semester' },
              { n: `${totalAll}+`, l: 'Total SKS' },
              { n: `${kurikulumData.filter(k => k.kompetensi).length}`, l: 'MK Kompetensi' },
              { n: `${kurikulumData.length}`, l: 'Total Mata Kuliah' },
            ].map((s) => (
              <div key={s.l} style={{
                textAlign: 'center', padding: '24px 16px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, var(--navy) 0%, #1a3060 100%)',
              }}>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '2.4rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
                  {s.n}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: 8, fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--navy)' }}>Kurikulum Teknik Elektro:</span>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: 'var(--white)', border: '1px solid var(--border)', borderLeft: '4px solid var(--electric)' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>MK Kompetensi Utama</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, border: '1px solid var(--border)', background: 'var(--off-white)' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--gray-500)' }}>MK Pendukung</span>
            </div>
          </div>

          {/* Semester Tabs */}
          <div className="tabs" style={{ marginBottom: 0 }}>
            {semesters.map((sem) => (
              <button
                key={sem}
                className={`tab-btn${activeSem === sem ? ' active' : ''}`}
                onClick={() => setActiveSem(sem)}
              >
                Smt {sem}
              </button>
            ))}
          </div>

          <div style={{
            padding: '24px 0 0',
            marginBottom: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <h3 style={{ fontFamily: 'Playfair Display,serif', fontWeight: 700, color: 'var(--navy)', fontSize: '1.1rem' }}>
              Semester {activeSem}
            </h3>
            <div style={{ display: 'flex', gap: 12 }}>
              <span className="badge badge-blue">{mks.length} Mata Kuliah</span>
              <span className="badge badge-amber">{totalSks} SKS</span>
            </div>
          </div>

          <div className="mk-grid">
            {mks.map((mk) => (
              <div className={`mk-item${mk.kompetensi ? ' kompetensi' : ''}`} key={mk.kode}>
                <div className="mk-item-kode">{mk.kode}</div>
                <div className="mk-item-nama">{mk.nama}</div>
                <div className="mk-item-sks">
                  {mk.sks} SKS
                  {mk.kompetensi && (
                    <span className="badge badge-blue" style={{ marginLeft: 8, fontSize: '0.68rem' }}>
                      Kompetensi
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {mks.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--gray-500)' }}>
              Data kurikulum semester {activeSem} belum tersedia.
            </div>
          )}
        </div>
      </section>

      {/* Keterangan Akademik */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Informasi</span>
            <h2 className="section-title">Ketentuan Akademik</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { judul: 'Beban Studi', isi: 'Minimal 144 SKS yang harus diselesaikan dalam 8 semester (4 tahun).' },
              { judul: 'Kehadiran', isi: 'Minimal 75% kehadiran per mata kuliah untuk dapat mengikuti ujian akhir.' },
              { judul: 'Tugas Akhir', isi: 'Skripsi/Tugas Akhir (4 SKS) dikerjakan pada semester 8 atau setelah menyelesaikan minimal 120 SKS.' },
              { judul: 'IPK Kelulusan', isi: 'IPK minimal 2,00 (skala 4,00) untuk mendapatkan gelar Sarjana Teknik (S.T.).' },
              { judul: 'PKL / Magang', isi: 'Praktek Kerja Lapangan wajib dilaksanakan di industri mitra selama minimal 4 bulan.' },
              { judul: 'KKN', isi: 'Kuliah Kerja Nyata wajib dilaksanakan selama minimal 45 hari di lokasi yang ditentukan Universitas.' },
            ].map((item) => (
              <div className="card" key={item.judul} style={{ padding: 22 }}>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 8, fontSize: '0.95rem' }}>{item.judul}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.7 }}>{item.isi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
