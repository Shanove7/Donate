# Kaxel Donate — rebuild

Versi rebuild ini mempertahankan UI dan fitur inti sebelumnya serta menggunakan SDK resmi Betabotz Paygate untuk membuat, mengecek, dan membatalkan transaksi.

## Konfigurasi satu file

Untuk menghindari pengaturan Environment Variables di Vercel, buka `config.js` lalu isi nilai konfigurasi yang masih kosong. File ini dipakai langsung oleh backend dan ikut dibundle bersama fungsi server. Jangan pernah menaruh nilai rahasia di `public/`.

- Gunakan API key Betabotz yang benar untuk metode yang diaktifkan.
- Gunakan `JSONBIN_ID` dan `JSONBIN_KEY` lama agar data lama tetap terhubung.
- Isi `WASENDER_API_KEY` dan `OTP_HASH_SECRET` untuk OTP/notifikasi member.
- Ganti `ADMIN_PASSWORD` dengan password kuat.
- Fee dinonaktifkan secara default. Jangan aktifkan sebelum skema fee dikonfirmasi sesuai ketentuan provider.

`config.js` berisi nilai kosong, bukan kredensial aktif. Website belum bisa memproses transaksi atau OTP sebelum konfigurasi diisi. Jangan commit file konfigurasi yang sudah berisi rahasia ke repository publik. `.env.example` tersedia untuk pengembangan lokal jika dibutuhkan.

## Fitur yang dipertahankan

- Donasi anonim dan member dengan OTP WhatsApp.
- QRIS DANA utama, serta opsi pembayaran yang tersedia pada UI.
- Status transaksi, invoice, notifikasi member, dashboard, level, badge, riwayat, komentar/live chat, panel admin, audit log, health monitor, dan halaman status.
- Penyimpanan JSONBin; gunakan kredensial lama untuk mempertahankan data.

## Integrasi Betabotz Paygate

Pembuatan, pemeriksaan, dan pembatalan transaksi menggunakan `betabotz-paygate`. Callback tidak dipercaya sebagai bukti pembayaran sendirian; kode melakukan verifikasi ulang ke Paygate. Status final tetap harus diuji dengan transaksi nyata/sandbox sebelum rilis.

Dokumentasi: https://web.btzpay.my.id/documentation
SDK: https://www.npmjs.com/package/betabotz-paygate

## Menjalankan

```bash
npm install
npm start
```

Pemeriksaan sintaks: `npm run check`. Lingkungan build ini tidak memiliki kredensial gateway sehingga tidak ada transaksi live yang dapat diuji di sini. JSONBin bukan database transaksional; untuk trafik besar, rencanakan migrasi ke database transaksional.
