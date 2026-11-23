# Warung Nasi Padang Sabana Rancak 🍛

Website interaktif untuk Warung Makan Nasi Padang dengan desain modern bernuansa Minangkabau (Marawa: Merah, Kuning/Emas, Hitam), penjelasan budaya kuliner interaktif, tombol kontak langsung ke pemilik warung, serta efek animasi kursor bertema rempah.

---

## ✨ Fitur Utama

1. **Animasi Kursor Interaktif & Partikel Rempah Minang**:
   - Titik kursor utama (*custom dot cursor*) dengan pendaran warna emas kunyit & merah cabai.
   - Cincin pengikut kursor (*cursor follower*) dengan gerakan inersia mulus (*smooth lerp*).
   - Efek jejak partikel rempah (*spice & ember particle trail*) saat kursor digerakkan.
   - Efek ledakan percikan bumbu saat kursor diklik di layar.
   - Pembesaran kursor dinamis saat melayang (*hover*) di atas tombol, kartu menu, kartu filosofi, dan foto.

2. **Halaman & Bagian Awal: Edukasi Kuliner Minang Interaktif**:
   - **Kisah 4 Pilar Filosofis Masakan Minang**: *Lado* (Cabai), *Karembie* (Kelapa/Santan), *Rempah* (Bumbu Warisan), dan *Daging* (Bahan Pokok).
   - **Eksplorasi 6 Rempah Sakral Padang**: Ketuk pilihan rempah (Lengkuas, Cabai Keriting, Santan Murni, Serai Wangi, Asam Kandis, Kapulaga & Cengkeh) untuk melihat nama Latin, khasiat pengawet alami, tingkat aroma, dan peran kuncinya.
   - **Tradisi Ikonik**: Penjelasan mengapa nasi bungkus Padang porsinya 1.5x lebih banyak (sejarah solidaritas & aroma daun pisang) vs Seni Manjunjung 20 Piring (gaya hidang).
   - **Simulator Racik Piring Padang**: Pengunjung dapat memilih porsi kuah nasi, lauk andalan, dan lauk pelengkap dengan kalkulasi total otomatis serta tombol langsung pesan racikan tersebut via WhatsApp.

3. **Daftar Menu Favorit Warung**:
   - Tab filter kategori: *Semua Menu, Legendaris (Daging), Ayam & Telur, Gulai Kental, Sambal & Sayur*.
   - Dilengkapi foto sajian, harga realistis, indikator level kepedasan cabai (*spicy meter*), dan tombol cepat **"Pesan Item Ini"**.

4. **Kontak Langsung Pemilik Warung (WhatsApp)**:
   - **Profil Pemilik**: Profil Uda Hendra Sutan Marajo (Generasi ke-2 pengelola resep).
   - **Tombol WhatsApp Mengambang (Floating Action Button)** dengan cincin radar berdenyut (*pulse animation*).
   - **Formulir Pemesanan Cepat**: Menghasilkan pesan WhatsApp otomatis dan rapi (Nama, Jumlah Porsi, Pilihan Lauk, Catatan khusus seperti kuah banjir/pisah).
   - **Pop-up Modal Kontak**: Akses cepat via WhatsApp, telepon langsung, atau reservasi meja.

---

## 🚀 Cara Menjalankan Website

Tidak memerlukan instalasi server atau dependensi tambahan! Cukup buka file:

```text
c:\Users\sheil\OneDrive\Documents\testing-antigravity\index.html
```

- **Cara 1**: Klik dua kali file `index.html` dari File Explorer di Windows.
- **Cara 2**: Klik kanan pada `index.html` -> pilih **Open With** -> pilih peramban favorit Anda (**Google Chrome**, **Microsoft Edge**, atau **Mozilla Firefox**).

---

## 🛠️ Struktur Berkas

- `index.html` : Struktur semantik HTML5, konten edukatif, kartu menu, formulir, dan modal kontak.
- `style.css` : Tata letak responsif, palet warna Minang Marawa & Krem hangat, serta animasi custom cursor.
- `script.js` : Logika animasi kursor lerp, generator partikel rempah, simulator racik piring, filter menu, dan integrasi API WhatsApp.
