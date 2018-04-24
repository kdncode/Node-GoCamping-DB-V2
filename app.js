var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose')
var app = express();

mongoose.connect("mongodb://localhost/gocamping");

app.use(bodyParser.urlencoded( { extended: true} ));

app.set("view engine", "ejs")

// Schema setup
var gocampingSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

// Convert to model
var GoCamping = mongoose.model("GoCamping", gocampingSchema);

// Create a GoCamping
GoCamping.create({
    name: "Yingyang", 
    image: "https://macaobeachhostel.com/wp-content/uploads/2017/08/Slide01-2.jpg",
    description: "Hello world. It's me Yingyang.... Go go go"
    
}, (err, gocamping) => {
    if(err) { console.log(err) }
    else { console.log("Newly created gocamping")
            console.log(gocamping) }
})


// var camps = [
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
//     { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"}
//     // { name: "Hiiiii", image: "https://img.sunset02.com/sites/default/files/styles/300x300/public/image/2016/09/main/camping-expert-north-cascade-range-washington-lightweight-tent-0514_0.jpg"},
//     // { name: "hahaha", image: "https://beinglike.com/wp-content/uploads/2017/02/Objects-That-Make-Your-Camping-300x300.jpg"},
//     // { name: "Lalala", image: "https://macaobeachhostel.com/wp-content/uploads/2017/08/Slide01-2.jpg"}
// ]


app.get("/", (req, res) => {
    res.render("landing")
})

// INDEX - Show all gocampings
app.get("/campgrounds", (req, res) => {

    // Get all gocampings from DB
    GoCamping.find({}, (err, allGoCampings) => {
        if (err) { console.log(err) }
        else {
            res.render("campgrounds", {camps: allGoCampings})
         }
    })
})


// CREAT - add new gocamping to DB
app.post("/campgrounds", (req, res) => {

    // Get data from form & add to camps array
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = { name: name, image: image }
    
    // Create a new gocamping and save to DB
    GoCamping.create(newCamp, (err, newlyCreated) =>{
        if(err) { console.log(err)}
        else {
            // Redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
})

// NEW - form from to create new gocamping 

app.get("/campgrounds/new", (req, res) => {
    res.render("new")
})

//
app.get("/campgrounds/:id", (req, res) => {

    // Find the gocamping with provided ID
    // 
    res.send("New new new ")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("GoCamping app is running")
})