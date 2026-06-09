import React, { useState, useEffect } from 'react';

const GitHubTable = ({ url, fallbackText = "Memuat data tabel...", className = "pub-table" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data tabel');
        return res.json(); // Mengasumsikan data adalah JSON
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching table data:", err);
        setError(true);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div className="loading-text">{fallbackText}</div>;
  if (error) return <div className="error-text">Data tabel gagal dimuat.</div>;
  if (data.length === 0) return <div className="empty-data-text">Tidak ada data tersedia.</div>;

  // Mengambil header dari kunci objek pertama (asumsi semua objek memiliki kunci yang sama)
  const headers = Object.keys(data[0]);

  return (
    <div className="pub-table-wrap"> {/* Menggunakan wrapper yang sudah ada untuk styling */}
      <table className={className}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</th> // Konversi camelCase ke Title Case
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GitHubTable;