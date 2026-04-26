const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/company/:cik", async (req, res) => {

    try {
        const cik = req.params.cik;
        const response = await fetch(
            `https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`,
            {
                headers: {
                    "User-Agent": "sakshi8394@gmail.com"
                }
            }

        );


        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});