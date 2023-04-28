# Transaction API

API untuk melakukan transaksi. Dapat mencatat transaksi baru dan mengambil data transaksi.

## Daftar Isi

- [Instalasi](#instalasi)
- [Masalah Dan Solusi](#masalah-dan-solusi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Menggunakan API](#menggunakan-api)
  - [Membuat Transaksi Baru](#membuat-transaksi-baru)
  - [Mengambil Data Transaksi](#mengambil-data-transaksi)
- [Menjalankan Unit Test](#menjalankan-unit-test)

## Masalah Dan Solusi
1.  Bagaimana jika terdapat ribuan transaksi pada database?
      - untuk menghadapi permasalahan ribuan transaksi pada database, dapat digunakan indexing pada kolom yang sering digunakan dalam pencarian, seperti menu dan customer_id.
2. Bagaimana jika terdapat banyak user yang mengakses API tersebut secara bersamaan.
      - untuk menghadapi banyak user yang mengakses API secara bersamaan, dapat dilakukan penggunaan teknik caching atau load balancing pada server
## Instalasi

1. Clone repository ini:

   ```
   git clone https://github.com/ilzamafif/transaction-api.git
   ```

2. Masuk ke dalam direktori project:

   ```
   cd transaction-api
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Menjalankan Aplikasi

Untuk menjalankan aplikasi, jalankan perintah berikut:

```
npm start
```

Aplikasi akan berjalan pada `http://localhost:3000`.

## Menggunakan API

### Membuat Transaksi Baru

Untuk membuat transaksi baru, kirimkan sebuah request `POST` ke endpoint `/transactions` dengan data transaksi yang ingin dibuat dalam format JSON. Berikut adalah contoh data transaksi:

```json
{
  "customer_id": 1,
  "menu": "Nasi Goreng",
  "price": 15000,
  "qty": 2,
  "payment": "cash",
  "total": 30000
}
```

Field yang wajib diisi dalam data transaksi adalah sebagai berikut:

- `customer_id` (number): ID pelanggan yang melakukan transaksi.
- `menu` (string): Nama menu yang dipesan.
- `price` (number): Harga satuan menu.
- `qty` (number): Jumlah pesanan.
- `payment` (string): Metode pembayaran (boleh diisi dengan "cash" atau "credit").
- `total` (number): Total harga transaksi.

Jika request berhasil, server akan memberikan response dengan kode status `201` dan data transaksi yang telah dibuat dalam format JSON.

### Mengambil Data Transaksi

Untuk mengambil data transaksi, kirimkan sebuah request `GET` ke endpoint `/transactions`. Anda juga dapat menambahkan beberapa parameter untuk memfilter hasil yang diterima. Parameter yang tersedia adalah sebagai berikut:

- `menu` (string): Filter transaksi berdasarkan nama menu.
- `price` (number): Filter transaksi berdasarkan harga.
- `customer` (boolean): Jika bernilai `true`, hasil akan diurutkan berdasarkan nama pelanggan.

Jika request berhasil, server akan memberikan response dengan kode status `200` dan data transaksi yang telah difilter dalam format JSON.

## Menjalankan Unit Test

Untuk menjalankan unit test, jalankan perintah berikut:

```
npm test
```

Unit test akan dijalankan menggunakan Jest. Setelah selesai dijalankan, Jest akan memberikan laporan mengenai hasil test yang telah dijalankan.