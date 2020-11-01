const express = require("express"); 
const app = express();
const path = require("path");

//settings
app.set("port", 4000); //Parametro del Puerto
app.set("views", path.join(__dirname, "views")); //Especificar de donde vamos a tomar los templates
app.set("view engine", "ejs"); //Especificamos que motor de plantillas vamos a trabajar "ejs"
//settings

//routes
app.use(require("./routes/index"));
//routes

//static files
app.use(express.static(path.join(__dirname, "public"))); //Archivos estaticos que no requieren compilación (imagenes,css,etc)
//static files

//port
app.listen(app.get("port"), () => {
    console.log("Server run on Port: ", app.get("port"));
});
//port