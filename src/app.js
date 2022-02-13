import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();
//estabelcer la carpeta de views
app.set("views", path.join(__dirname, "views"));

//configuracion de handlebars
const hbs = create({
    extname: '.hbs',
    layoutsDir: path.join("src/views", "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
});

//
app.use(express.static(path.join(__dirname, '/views/')));
//

app.engine('.hbs', hbs.engine);

app.set('view engine', ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

//routes
app.use(indexRoutes);

export default app; 