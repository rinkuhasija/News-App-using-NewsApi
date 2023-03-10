import express from "express";
const app =  express();
import path from "path";
import axios from "axios";
import dotenv from 'dotenv'
import cors from "cors";
dotenv.config()
const port = 3001;


//middlewares
app.use(express.static('./public'));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, './public')} )}
)

app.get('/api',  async (req, res) => {
    console.log(req._parsedUrl.query);
    let url = "https://newsapi.org/v2/everything?" + req._parsedUrl.query;
    let r = await axios.get(url)
    let a = r.data
    res.json(a)
    // console.log(a);
})

// function api() {
//     apikey = process.env.APIKEY
// }


app.listen(port, console.log(`Server running on PORT ${port}`))
