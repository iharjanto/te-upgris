import PageHeader from '../components/PageHeader'
import { pengumumanList } from '../data/data'
import { Calendar, Download } from 'lucide-react'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

const katColor = {
  Akademik: 'badge-blue',
  'Tugas Akhir': 'badge-green',
  Kemahasiswaan: 'badge-amber',
  Kebijakan: 'badge-gray',
}

export default function Pengumuman() {
  return (
    <>
      <PageHeader
        title="Pengumuman"
        subtitle="Informasi terbaru, jadwal akademik, dan pengumuman resmi untuk mahasiswa Program Studi Teknik Elektro UPGRIS"
        breadcrumbs={[{ label: 'Pengumuman' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            {['Semua', 'Akademik', 'Tugas Akhir', 'Kemahasiswaan', 'Kebijakan'].map(k => (
              <span key={k} className={`badge ${k === 'Semua' ? 'badge-blue' : 'badge-gray'}`}
                style={{ padding: '6px 14px', cursor: 'pointer', fontSize: '0.8rem' }}>
                {k}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {pengumumanList.map((item) => (
              <div key={item.id} className="card" style={{ padding: '22px 26px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 56, textAlign: 'center', flexShrink: 0,
                  borderRight: '2px solid var(--border)', paddingRight: 20,
                }}>
                  <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '2rem', fontWeight: 800, color: 'var(--electric)', lineHeight: 1 }}>
                    {new Date(item.tanggal).toLocaleDateString('id-ID', { day: '2-digit' })}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--gray-500)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>
                    {new Date(item.tanggal).toLocaleDateString('id-ID', { month: 'short' })}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray-300)' }}>
                    {new Date(item.tanggal).getFullYear()}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span className={`badge ${katColor[item.kategori] || 'badge-gray'}`}>{item.kategori}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--navy)', marginBottom: 8, lineHeight: 1.4 }}>
                    {item.judul}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.7 }}>
                    {item.deskripsi}
                  </p>
                  {item.lampiran && (
                    <a href={item.lampiran} target="_blank" rel="noreferrer"
                      style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'var(--electric)', fontWeight: 600 }}>
                      <Download size={14} /> Unduh Dokumen
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: '20px 24px', background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--navy)' }}>Catatan:</strong> Untuk informasi lebih lanjut,
              mahasiswa dapat menghubungi Sekretariat Program Studi atau mengunjungi portal akademik UPGRIS.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
