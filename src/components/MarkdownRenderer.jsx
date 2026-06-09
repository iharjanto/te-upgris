import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ url, fallbackText = "Memuat konten..." }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil konten');
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div className="loading-text">{fallbackText}</div>;
  if (error) return <div className="error-text">Konten gagal dimuat.</div>;

  return <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>;
};

export default MarkdownRenderer;