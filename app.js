const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000
const kelasRoute = require("./routes/kelas")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/kelas",kelasRoute)


app.listen(PORT , () => console.log(`server running on port ${PORT}`))