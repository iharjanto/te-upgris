import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Zap } from 'lucide-react'
import { prodiInfo } from '../data/data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-text">Teknik Elektro</div>
            <div className="logo-sub">Universitas PGRI Semarang</div>
            <p>
              Program Studi Teknik Elektro UPGRIS berkomitmen menghasilkan
              lulusan yang kompeten, inovatif, dan berdaya saing global
              melalui pendidikan berbasis riset dan kerja sama industri.
            </p>
            <div className="accreditation-badge" style={{ marginTop: 20 }}>
              <Zap size={14} color="var(--accent)" />
              <span>Terakreditasi Baik — BAN-PT 2021</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/profil">Profil Prodi</Link></li>
              <li><Link to="/akademik">Akademik</Link></li>
              <li><Link to="/dosen">Dosen</Link></li>
              <li><Link to="/penelitian">Penelitian & PkM</Link></li>
              <li><Link to="/berita">Berita</Link></li>
              <li><Link to="/pengumuman">Pengumuman</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tautan</h4>
            <ul>
              <li><a href="https://upgris.ac.id" target="_blank" rel="noreferrer">Portal UPGRIS</a></li>
              <li><a href="https://sinta.kemdikbud.go.id" target="_blank" rel="noreferrer">SINTA Kemdikbud</a></li>
              <li><a href="https://pddikti.kemdikbud.go.id" target="_blank" rel="noreferrer">PDDikti</a></li>
              <li><a href="https://ban-pt.kemdikbud.go.id" target="_blank" rel="noreferrer">BAN-PT</a></li>
              <li><a href="https://simak.upgris.ac.id" target="_blank" rel="noreferrer">SIMAK (Portal Akademik)</a></li>
              <li><a href="https://elearning.upgris.ac.id" target="_blank" rel="noreferrer">E-Learning UPGRIS</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontak</h4>
            <div className="footer-contact-item">
              <MapPin size={15} />
              <span>{prodiInfo.alamat}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} />
              <span>{prodiInfo.telepon}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} />
              <span>{prodiInfo.email}</span>
            </div>
            <div className="footer-contact-item">
              <Globe size={15} />
              <span>elektro.upgris.ac.id</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Program Studi Teknik Elektro UPGRIS. Hak cipta dilindungi.</span>
          <span>Dikembangkan oleh Tim IT Prodi Teknik Elektro</span>
        </div>
      </div>
    </footer>
  )
}
