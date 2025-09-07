const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require("ejs-mate");


app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);


//-------connect to MongoDB-------------
const MONGO_URL="mongodb://127.0.0.1:27017/Portfolio";
main()
    .then(() => {
        console.log("connected");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);

}

//------------home route----------------
app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});