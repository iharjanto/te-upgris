import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { vmts, prodiInfo } from '../data/data'
import { CheckCircle, BookMarked, Award, FileText } from 'lucide-react'

export default function Profil() {
  const [tab, setTab] = useState('vmts')

  return (
    <>
      <PageHeader
        title="Profil Program Studi"
        subtitle="Informasi lengkap tentang Program Studi Teknik Elektro UPGRIS"
        breadcrumbs={[{ label: 'Profil' }]}
      />

      <section className="section">
        <div className="container">
          <div className="tabs">
            {[
              { id: 'vmts', label: 'Visi & Misi' },
              { id: 'identitas', label: 'Identitas Prodi' },
              { id: 'akreditasi', label: 'Akreditasi' },
              { id: 'kebijakan', label: 'Kebijakan Prodi' },
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

          {tab === 'vmts' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--navy) 0%, #1a3060 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 32,
                    marginBottom: 24,
                  }}>
                    <span className="section-label" style={{ color: 'var(--accent-light)' }}>Visi</span>
                    <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.8, marginTop: 8 }}>
                      {vmts.visi}
                    </p>
                  </div>

                  <div>
                    <span className="section-label">Tujuan</span>
                    <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {vmts.tujuan.map((t, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <CheckCircle size={18} color="var(--electric)" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="section-label">Misi</span>
                  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {vmts.misi.map((m, i) => (
                      <div key={i} className="card" style={{ padding: 20, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <div style={{
                          width: 32, height: 32,
                          background: 'var(--electric)',
                          borderRadius: 8,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                          fontWeight: 800, fontSize: '0.85rem', color: 'white',
                          fontFamily: 'Playfair Display, serif'
                        }}>{i + 1}</div>
                        <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--gray-700)', margin: 0 }}>{m}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'identitas' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {[
                  { label: 'Nama Program Studi', value: prodiInfo.nama },
                  { label: 'Jenjang', value: `Sarjana (${prodiInfo.jenjang})` },
                  { label: 'Universitas', value: prodiInfo.universitas },
                  { label: 'Fakultas', value: prodiInfo.fakultas },
                  { label: 'Status Akreditasi', value: prodiInfo.akreditasi },
                  { label: 'Nomor SK BAN-PT', value: prodiInfo.noSk },
                  { label: 'Jumlah Mahasiswa (TS)', value: `${prodiInfo.jumlahMahasiswaTs} orang` },
                  { label: 'Gelar Lulusan', value: 'Sarjana Teknik (S.T.)' },
                  { label: 'Email', value: prodiInfo.email },
                  { label: 'Telepon', value: prodiInfo.telepon },
                  { label: 'Alamat', value: prodiInfo.alamat },
                ].map((row) => (
                  <div key={row.label} style={{ padding: '16px 20px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--off-white)' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--electric)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {row.label}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.92rem' }}>{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'akreditasi' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32 }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, #F57C00 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 32,
                  textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Award size={48} color="white" style={{ marginBottom: 16 }} />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: 8 }}>
                    Terakreditasi Baik
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)' }}>Badan Akreditasi Nasional<br />Perguruan Tinggi (BAN-PT)</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { label: 'Status Akreditasi', value: 'Terakreditasi Baik' },
                    { label: 'Nomor SK', value: '13545/SK/BAN-PT/Akred/S/XII/2021' },
                    { label: 'Lembaga Akreditasi', value: 'Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT)' },
                    { label: 'Jenjang Program', value: 'Program Sarjana (S1)' },
                  ].map((item) => (
                    <div key={item.label} className="card" style={{ padding: 20 }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--electric)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                        {item.label}
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'kebijakan' && (
            <div>
              <div className="section-header">
                <h2 className="section-title">Dokumen Kebijakan Prodi</h2>
                <p className="section-desc">Dokumen kebijakan dan standar mutu Program Studi Teknik Elektro UPGRIS mengacu pada SPMI Fakultas dan Universitas.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {[
                  { judul: 'Kebijakan SPMI', no: 'K.SPMI-FTI-01', icon: FileText },
                  { judul: 'Pedoman PPEPP', no: 'PEDOMAN PPEPP-UPGRIS-1', icon: BookMarked },
                  { judul: 'Standar Mutu Pendidikan', no: 'S-SPMI.FTI-1.1 s/d 4.1', icon: Award },
                  { judul: 'Manual Dokumentasi SPMI', no: 'M-SPMI-FTI-01', icon: FileText },
                  { judul: 'Dokumen Penetapan SPMI', no: 'SPMI-Penetapan', icon: FileText, link: 'https://drive.google.com/drive/folders/14oXAst3hefxQK8-qM4w932OQRfHi1fGT' },
                  { judul: 'Laporan Audit AMI', no: 'SPMI-Evaluasi', icon: BookMarked, link: 'https://drive.google.com/drive/folders/1PhtyEULhb5j4qsClk-yjTjWeidmiOtqZ' },
                ].map((doc) => (
                  <div key={doc.no} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 20 }}>
                    <div style={{
                      width: 44, height: 44, background: '#EBF3FF', borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <doc.icon size={20} color="var(--electric)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)', marginBottom: 4 }}>{doc.judul}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginBottom: doc.link ? 10 : 0 }}>{doc.no}</div>
                      {doc.link && (
                        <a href={doc.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', color: 'var(--electric)', fontWeight: 600 }}>
                          Lihat Dokumen →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
