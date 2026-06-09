// =====================================================
// DATA PRODI – Teknik Elektro UPGRIS
// Sumber: LKPS BATCH3_2026
// Update konten: edit file ini lalu rebuild
// =====================================================

// Base URL untuk konten GitHub (Sesuaikan dengan repo Anda)
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/username/te-upgris-content/main";

export const prodiInfo = {
  nama: "Teknik Elektro",
  jenjang: "S1",
  universitas: "Universitas PGRI Semarang",
  singkatan: "UPGRIS",
  fakultas: "Fakultas Teknik dan Informatika",
  akreditasi: "Terakreditasi Baik",
  noSk: "13545/SK/BAN-PT/Akred/S/XII/2021",
  jumlahMahasiswaTs: 133,
  email: "teknikelektro@upgris.ac.id",
  telepon: "(024) 8316377",
  alamat: "Jl. Sidodadi Timur No.24, Semarang, Jawa Tengah 50232",
  website: "https://elektro.upgris.ac.id",
};

export const vmts = {
  markdownUrl: `${GITHUB_RAW_BASE}/profil/visi-misi.md`,
  tujuanUrl: `${GITHUB_RAW_BASE}/profil/tujuan.md`
};

export const dosenList = [
  {
    nama: "Dr. Ir. Adhi Kusmantoro, ST, MT",
    nidn: "0619047301",
    jabatan: "Lektor",
    bidang: "Tenaga Listrik",
    pendidikan: "S3 Teknik Elektro – ITS",
    mataKuliah: "Pembangkit Listrik Energi Terbarukan, Teknik Kontrol Digital, Metodologi Penelitian",
    sertifikasi: "PII",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646833",
    scholar: "https://scholar.google.com/citations?user=adhi_kusmantoro",
    kategori: "DTPS",
  },
  {
    nama: "Ir. Margono, ST, M.Eng",
    nidn: "0627046102",
    jabatan: "Lektor",
    bidang: "Tenaga Listrik",
    pendidikan: "S2 Teknik Elektro – UGM",
    mataKuliah: "Rangkaian Listrik, Analisis Tenaga Listrik",
    sertifikasi: "BNSP",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646834",
    scholar: "https://scholar.google.com/citations?user=margono_upgris",
    kategori: "DTPS",
  },
  {
    nama: "Ir. Muhammad Amiruddin, ST., M.Eng",
    nidn: "0621078403",
    jabatan: "Lektor",
    bidang: "Sistem Kendali",
    pendidikan: "S2 Teknik Elektro – UGM",
    mataKuliah: "Dasar Sistem Kendali, Kecerdasan Buatan, Logika Fuzzy",
    sertifikasi: "PII",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646835",
    scholar: "https://scholar.google.com/citations?user=amiruddin_te",
    kategori: "DTPS",
  },
  {
    nama: "Ir. Imadudin Harjanto, S.T., M.Eng",
    nidn: "0603048001",
    jabatan: "Lektor",
    bidang: "Jaringan Komputer",
    pendidikan: "S2 Teknik Elektro – UGM",
    mataKuliah: "Jaringan Komputer, Elektronika Digital, Matematika Diskret",
    sertifikasi: "PII",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646836",
    scholar: "https://scholar.google.com/citations?user=imadudin_te",
    kategori: "DTPS",
  },
  {
    nama: "Ir. Bambang Hadi Kunaryo, ST, MT",
    nidn: "0609067602",
    jabatan: "Asisten Ahli",
    bidang: "Telekomunikasi",
    pendidikan: "S2 Teknik Elektro – UNDIP",
    mataKuliah: "Dasar Telekomunikasi, Pengolahan Citra, Internet of Things",
    sertifikasi: "Insinyur Profesional",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646837",
    scholar: "https://scholar.google.com/citations?user=bambang_hk",
    kategori: "DTPS",
  },
  {
    nama: "Ir. Irna Farikhah, Ph.D",
    nidn: "0610018401",
    jabatan: "Asisten Ahli",
    bidang: "Konversi Energi",
    pendidikan: "Ph.D Bio-Applications and Systems Engineering – Tokyo University",
    mataKuliah: "Konversi Energi, Energi Terbarukan",
    sertifikasi: "–",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646838",
    scholar: "https://scholar.google.com/citations?user=irna_farikhah",
    kategori: "DTPS",
  },
  {
    nama: "Dr. Sigit Ristanto",
    nidn: "0603098102",
    jabatan: "Lektor",
    bidang: "Pengolahan Citra",
    pendidikan: "S3 Fisika – UGM",
    mataKuliah: "Pengolahan Citra, Sensor dan Tranduser",
    sertifikasi: "–",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646839",
    scholar: "https://scholar.google.com/citations?user=sigit_ristanto",
    kategori: "DTPS",
  },
  {
    nama: "Dr. Affandi Faisal",
    nidn: "0608108204",
    jabatan: "Lektor Kepala",
    bidang: "Material Teknik",
    pendidikan: "S3 Ilmu Fisika – ITS",
    mataKuliah: "Bahan-bahan Listrik, Sensor dan Tranduser, Fisika Listrik",
    sertifikasi: "–",
    sinta: "https://sinta.kemdikbud.go.id/authors/profile/6646840",
    scholar: "https://scholar.google.com/citations?user=affandi_faisal",
    kategori: "DTPS",
  },
];

export const kurikulumData = [
  { semester: 1, kode: "6625434654", nama: "Rangkaian Listrik Dasar", sks: 3, kompetensi: true },
  { semester: 1, kode: "6625121659", nama: "Teknologi Informasi", sks: 2, kompetensi: true },
  { semester: 1, kode: "6625332655", nama: "Aljabar Linear", sks: 3, kompetensi: true },
  { semester: 1, kode: "6625332608", nama: "Dasar Telekomunikasi", sks: 2, kompetensi: false },
  { semester: 1, kode: "6625332637", nama: "Material Teknik Elektro", sks: 2, kompetensi: false },
  { semester: 1, kode: "6625332615", nama: "Fisika Mekanika", sks: 3, kompetensi: false },
  { semester: 2, kode: "6625332607", nama: "Dasar Teknik Tenaga Listrik", sks: 3, kompetensi: false },
  { semester: 2, kode: "6625332609", nama: "Elektronika Analog", sks: 3, kompetensi: true },
  { semester: 2, kode: "6625332616", nama: "Fisika Listrik", sks: 3, kompetensi: false },
  { semester: 2, kode: "6625332619", nama: "Jaringan Komputer", sks: 3, kompetensi: true },
  { semester: 2, kode: "6625332611", nama: "Elektronika Digital", sks: 3, kompetensi: true },
  { semester: 2, kode: "6625332639", nama: "Pemrograman Komputer", sks: 3, kompetensi: false },
  { semester: 3, kode: "6625332650", nama: "Perancangan Sistem Analog", sks: 3, kompetensi: true },
  { semester: 3, kode: "6625332610", nama: "Elektronika Daya", sks: 3, kompetensi: true },
  { semester: 3, kode: "6625232625", nama: "Komunikasi Data", sks: 3, kompetensi: true },
  { semester: 3, kode: "6625131657", nama: "Sistem Instrumentasi", sks: 3, kompetensi: true },
  { semester: 3, kode: "6625131660", nama: "Transmisi dan Distribusi", sks: 3, kompetensi: true },
  { semester: 3, kode: "6625331602", nama: "Analisa Tenaga Listrik", sks: 3, kompetensi: true },
  { semester: 4, kode: "6625332606", nama: "Dasar Sistem Kendali", sks: 3, kompetensi: true },
  { semester: 4, kode: "6625322626", nama: "Komunikasi Nirkabel", sks: 2, kompetensi: true },
  { semester: 4, kode: "6625332630", nama: "Logika Fuzzy", sks: 3, kompetensi: true },
  { semester: 4, kode: "6625331656", nama: "Sensor dan Tranduser", sks: 3, kompetensi: true },
  { semester: 4, kode: "6625332623", nama: "Kecerdasan Buatan", sks: 3, kompetensi: true },
  { semester: 4, kode: "6625332651", nama: "PLC", sks: 3, kompetensi: false },
  { semester: 5, kode: "6625421613", nama: "Energi Terbarukan", sks: 2, kompetensi: true },
  { semester: 5, kode: "6625421631", nama: "Manajemen Energi dan Sistem Hybrid", sks: 2, kompetensi: true },
  { semester: 5, kode: "6625322648", nama: "Pengolahan Citra", sks: 2, kompetensi: true },
  { semester: 5, kode: "6625332612", nama: "Embedded System", sks: 3, kompetensi: false },
  { semester: 5, kode: "6625321614", nama: "Etika Profesi", sks: 2, kompetensi: false },
  { semester: 5, kode: "6625332603", nama: "Antarmuka dan Arsitektur Komputer", sks: 3, kompetensi: true },
  { semester: 6, kode: "6625324628", nama: "Kuliah Kerja Lapangan (KKL)", sks: 2, kompetensi: false },
  { semester: 6, kode: "6625745652", nama: "Praktek Kerja Lapangan (PKL)", sks: 4, kompetensi: false },
  { semester: 6, kode: "6625321638", nama: "Rekayasa Teknik Elektro", sks: 2, kompetensi: false },
  { semester: 6, kode: "6625241629", nama: "Kuliah Kerja Nyata (KKN)", sks: 4, kompetensi: true },
  { semester: 7, kode: "6625421632", nama: "Manajemen Industri", sks: 2, kompetensi: true },
  { semester: 7, kode: "6625321633", nama: "Manajemen Proyek dan K3", sks: 2, kompetensi: false },
  { semester: 8, kode: "6625765661", nama: "Tugas Akhir", sks: 4, kompetensi: true },
];

// =====================================================
// DATA BERITA – Update konten secara dinamis di sini
// Untuk integrasi CMS/API: ganti array ini dengan
// fetch() ke endpoint JSON dari hosting Anda.
// =====================================================
export const beritaList = [
  {
    id: 1,
    judul: "Mahasiswa Teknik Elektro Raih Finalis Kontes Robot Indonesia 2025",
    kategori: "Prestasi",
    contentUrl: `${GITHUB_RAW_BASE}/berita/berita-1.md`,
    tanggal: "2025-05-20",
    ringkasan: "Tim robot dari Prodi Teknik Elektro UPGRIS berhasil lolos ke babak final Kontes Robot Indonesia 2025 yang diselenggarakan oleh Kemdikbudristek.",
    penulis: "Admin Prodi",
  },
  {
    id: 2,
    judul: "Guest Lecture Bersama Universiti Teknologi Malaysia: Future of Power Systems",
    kategori: "Akademik",
    tanggal: "2025-04-15",
    ringkasan: "Program Studi Teknik Elektro mengadakan kuliah tamu internasional bersama pakar dari Universiti Teknologi Malaysia membahas perkembangan sistem tenaga listrik masa depan.",
    penulis: "Admin Prodi",
  },
  {
    id: 3,
    judul: "Dosen Prodi Publikasikan Riset Solar Cell di Jurnal Internasional Bereputasi",
    kategori: "Penelitian",
    tanggal: "2025-03-08",
    ringkasan: "Ir. Irna Farikhah, Ph.D berhasil mempublikasikan riset tentang peningkatan efisiensi perovskite solar cell di jurnal internasional terindeks Scopus Q1.",
    penulis: "Admin Prodi",
  },
  {
    id: 4,
    judul: "Workshop IoT Smart Home untuk UMKM Binaan Prodi Teknik Elektro",
    kategori: "Pengabdian",
    tanggal: "2025-02-22",
    ringkasan: "Dosen dan mahasiswa Prodi Teknik Elektro menyelenggarakan workshop IoT Smart Home untuk UMKM di kawasan Semarang sebagai bagian dari program pengabdian masyarakat.",
    penulis: "Admin Prodi",
  },
  {
    id: 5,
    judul: "Kerjasama Magang Industri Diperluas dengan PT Autonics Indonesia",
    kategori: "Kerjasama",
    tanggal: "2025-01-30",
    ringkasan: "Prodi Teknik Elektro UPGRIS menandatangani perpanjangan MoU kerjasama magang industri dengan PT Autonics Indonesia untuk mendukung kompetensi lulusan.",
    penulis: "Admin Prodi",
  },
  {
    id: 6,
    judul: "Pendaftaran Mahasiswa Baru Jalur Reguler 2025/2026 Dibuka",
    kategori: "Pengumuman",
    tanggal: "2025-01-10",
    ringkasan: "Program Studi Teknik Elektro UPGRIS membuka pendaftaran mahasiswa baru Jalur Reguler untuk Tahun Akademik 2025/2026. Pendaftaran dibuka hingga 31 Juli 2025.",
    penulis: "Admin Prodi",
  },
];

export const pengumumanList = [
  {
    id: 1,
    judul: "Jadwal Ujian Akhir Semester Genap 2024/2025",
    tanggal: "2025-06-01",
    deskripsi: "Jadwal UAS semester genap telah ditetapkan. Mahasiswa wajib memenuhi minimal 75% kehadiran untuk dapat mengikuti ujian.",
    kategori: "Akademik",
    lampiran: null,
  },
  {
    id: 2,
    judul: "Pengumuman Pendaftaran KKN Periode Juli 2025",
    tanggal: "2025-05-25",
    deskripsi: "Pendaftaran KKN Periode Juli 2025 dibuka mulai 1–20 Juni 2025. Mahasiswa wajib mengisi formulir online melalui portal akademik.",
    kategori: "Akademik",
    lampiran: null,
  },
  {
    id: 3,
    judul: "Batas Pengumpulan Tugas Akhir / Skripsi Periode Juni 2025",
    tanggal: "2025-05-20",
    deskripsi: "Batas akhir pengumpulan naskah Tugas Akhir untuk Yudisium Periode Juni 2025 adalah 30 Juni 2025.",
    kategori: "Tugas Akhir",
    lampiran: null,
  },
  {
    id: 4,
    judul: "Pemilihan Mahasiswa Berprestasi Tingkat Prodi 2025",
    tanggal: "2025-05-10",
    deskripsi: "Prodi membuka pendaftaran calon Mahasiswa Berprestasi Tingkat Prodi untuk selanjutnya mewakili di tingkat fakultas dan universitas.",
    kategori: "Kemahasiswaan",
    lampiran: null,
  },
  {
    id: 5,
    judul: "Pembaruan Panduan Penulisan Tugas Akhir 2025",
    tanggal: "2025-04-15",
    deskripsi: "Panduan penulisan Tugas Akhir telah diperbarui sesuai kebijakan terbaru. Harap mengacu pada panduan versi 2025.",
    kategori: "Kebijakan",
    lampiran: "https://drive.google.com/drive/folders/panduan-ta-2025",
  },
];

export const lulusanStats = {
  ipkRata: 3.32,
  waktuTunggu: "≤ 3 bulan (mayoritas)",
  kesesuaianBidang: "87%",
  pct: {
    nasional: 64,
    lokal: 21,
    wirausaha: 15,
  },
};
