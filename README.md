# crud nodejs - mysql - express

### instalasi
 
 - clone repo ini
 - masuk ke folder crud-nodejs-mysql
 - jalankan perintah ``` npm install ```
 - jangan lupa impor database 
 - file bernama sekolah.sql
 - jalankan aplikasi dengan mengetikkan perintah ``` npm start ```

 ### catatan
 - body request yang di perlukan 
 ```
 nama_siswa:string,
 kelas:string,
 umur:string,
 alamat:string,
 jurusan:string

 ```


 ### routes
```
 - GET /kelas 
 mendapatkan semua data dari database
```
```
 - GET /kelas/:id 
 mendapatkan data berdasarkan id 
```

```
 - POST /kelas 
  manambahkan data ke database
  jangan lupa menyertakan body
```

```
 - PUT /kelas/:id
    mengupdate data berdasarkan id
    jangan lupa menyertakan body
```
```
 - DELETE /kelas/:id
    menghapus data berdasarkan id
```


##### Silahkan mencoba