import express from "express";
import { engine } from "express-handlebars";
import { students } from "./StudentsArray.js";

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/students', (req, res) => {
    res.render("students", {layout: false, students: students});
})


app.listen(5000);