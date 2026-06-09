import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="page-header">
      <div className="container page-header-content">
        {breadcrumbs.length > 0 && (
          <div className="page-header-breadcrumb">
            <Link to="/">Beranda</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <ChevronRight size={12} />
                {b.path ? <Link to={b.path}>{b.label}</Link> : <span style={{ color: 'white' }}>{b.label}</span>}
              </span>
            ))}
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  )
}
