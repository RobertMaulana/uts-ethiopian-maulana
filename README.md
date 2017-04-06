# Simple Restaurant API

Simple Restaurant API adalah API yang memungkinkan user untuk menampilkan atau mengolah data yang sudah disediakan oleh developer API ini, yaitu Restaurant.inc

### List Collections
 - Food
 - Restaurant

# Api Basic Parameters

List **Foods** Routes yang bisa digunakan:

| Route | Http | Description |
| ------ | ------ | ------ |
| /api/foods | GET | Mendapatkan data semua foods
| /api/foods/:id | GET | Mendapatkan informasi spesifik sebuah food
| /api/foods | POST | Menambahkan food baru
| /api/foods/:id | DELETE | Menghapus food
| /api/foods/:id | PUT | Memperbarui informasi salah satu food

List **Restaurants** Routes yang bisa digunakan:

| Route | Http | Description |
| ------ | ------ | ------ |
| /api/restaurants | GET | Mendapatkan data semua restaurants
| /api/restaurants/:id | GET | Mendapatkan informasi spesifik sebuah restaurant
| /api/restaurants | POST | Menambahkan restaurant baru
| /api/restaurants/:id | DELETE | Menghapus restaurant
| /api/restaurants/:id | PUT | Memperbarui informasi salah satu restaurant

### Example Usage

| Usage | Route |
| ------ | ------ |
| Get all data foods | [http://localhost:3000/api/foods] [local] |

[local]: <http://localhost:3000/api/foods>

**Develop by Robert Maulana**
