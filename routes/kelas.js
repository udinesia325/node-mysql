const express = require("express")
const route = express.Router()
const { getKelas, getKelasById, addKelas, deleteById, updateById } = require("../controllers/kelas")

route.get("/", getKelas)
route.post("/", addKelas)
route.delete("/:id", deleteById)
route.put("/:id", updateById)

route.get("/:id", getKelasById)


module.exports = route
