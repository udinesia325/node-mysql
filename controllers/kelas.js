const kelasModel = require("../models/kelasModel")


const getKelasById = (req, res) => {
    const id = req.params.id
    kelasModel.query(`select * from kelas where id_siswa = '${id}'`, (err, result) => {
        err ? res.send(err) : res.json(result)

    })

}
const getKelas = (req, res) => {
    kelasModel.query("select * from kelas", (err, result) => {
        res.json(result)
    })

}

const addKelas = (req, res) => {
    const { nama_siswa, kelas, umur, alamat, jurusan } = req.body
    kelasModel.query("insert into kelas values(NULL,?,?,?,?,?)",
        [nama_siswa, kelas, umur, alamat, jurusan]
        , (err) => {
            err ? res.send(err) : res.send("added")
        })
}

const deleteById = (req, res) => {
    const id = req.params.id
    kelasModel.query("delete from kelas where `id_siswa` = ?", [id], (err) => {
        err ? res.send(err) : res.send("deleted");
    })
}

const updateById = (req, res) => {
    const id = req.params.id
    const { nama_siswa, kelas, umur, alamat, jurusan } = req.body
    kelasModel.query(`update kelas set
    nama_siswa = ? ,
    kelas = ? ,
    umur = ?,
    alamat = ?,
    jurusan = ? where id_siswa = ?`,
        [nama_siswa, kelas, umur, alamat, jurusan, id],
        (err) => {
            err ? res.send(err) : res.send("updated !");

        })
}

module.exports = { getKelas, getKelasById, addKelas, deleteById, updateById }
// kelasModel.query(`insert into kelas (nama_siswa,kelas,umur,alamat,jurusan) values('andi','12',12,'malang','tb')`
//     [nama_siswa,kelas,umur,alamat,jurusan],(err)=>{
//         err?res.status(404).send(err):res.json(JSON.stringify({message:"success"}))
//     })