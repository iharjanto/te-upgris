import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const navItems = [
  { label: 'Beranda', path: '/' },
  {
    label: 'Profil',
    path: '/profil',
    children: [
      { label: 'Visi & Misi', path: '/profil#vmts' },
      { label: 'Struktur Organisasi', path: '/profil#struktur' },
      { label: 'Akreditasi', path: '/profil#akreditasi' },
      { label: 'Kebijakan Prodi', path: '/profil#kebijakan' },
    ],
  },
  { label: 'Akademik', path: '/akademik' },
  { label: 'Dosen', path: '/dosen' },
  { label: 'Penelitian', path: '/penelitian' },
  { label: 'Pengumuman', path: '/pengumuman' },
  { label: 'Berita', path: '/berita' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div className="navbar-logo">TE</div>
          <div className="navbar-name">
            <strong>Teknik Elektro</strong>
            <span>UPGRIS Semarang</span>
          </div>
        </Link>

        <ul className={`navbar-nav${open ? ' open' : ''}`}>
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="nav-dropdown">
                <a
                  href={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </a>
                <div className="dropdown-menu">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.path}
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          className="navbar-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
