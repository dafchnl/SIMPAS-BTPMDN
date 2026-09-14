# Pengawasan Keselamatan Perkeretaapian — BTP Kelas I Medan

Dashboard statis (HTML/CSS/JS murni, tanpa build step) untuk pengawasan keselamatan
perkeretaapian di wilayah kerja BTP Kelas I Medan.

## Struktur folder

```
index.html
assets/
  img/
    logo-kemenhub.png
    logo-djka.png
    logo-btp-medan.png
    poster-inspeksi.jpg
  video/
    inspeksi-lapangan.mp4
```

## Menjalankan lokal

Buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, lalu unggah semua isi folder ini (termasuk folder `assets/`) ke branch `main`.
2. Buka **Settings → Pages** pada repository.
3. Pada **Build and deployment**, pilih **Deploy from a branch**, source `main`, folder `/root`.
4. Simpan — GitHub akan memberi URL publik (biasanya butuh 1–2 menit untuk aktif).

## Catatan

- Semua angka, tanggal, dan nama lokasi pada dashboard ini adalah **data contoh
  (placeholder)** untuk kebutuhan desain, dan perlu diganti dengan data lapangan BTP
  Medan yang sebenarnya sebelum dipublikasikan secara resmi.
- File video di `assets/video/` berukuran ±33 MB. Jika repository nantinya akan berisi
  banyak video, pertimbangkan Git LFS agar repo tidak terlalu berat.
