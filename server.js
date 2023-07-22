let express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  let term1 = parseInt(req.body["term1"]);
  let term2 = parseInt(req.body["term2"]);

  if (isNaN(term1) || isNaN(term2)) {
    console.log(req.body);
    return res.status(400).json({ message: "term must be a number" });
  }
  res.status(200).json({ sum: term1 + term2 });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
