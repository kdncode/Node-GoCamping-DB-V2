var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded( { extended: true} ));

app.set("view engine", "ejs")

var camps = [
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"},
    { name: "Yosemite", image: "https://www.visitwhitemountains.com/UploadedFiles/Vendors/77/DanforthBay-18.jpg"}
    // { name: "Hiiiii", image: "https://img.sunset02.com/sites/default/files/styles/300x300/public/image/2016/09/main/camping-expert-north-cascade-range-washington-lightweight-tent-0514_0.jpg"},
    // { name: "hahaha", image: "https://beinglike.com/wp-content/uploads/2017/02/Objects-That-Make-Your-Camping-300x300.jpg"},
    // { name: "Lalala", image: "https://macaobeachhostel.com/wp-content/uploads/2017/08/Slide01-2.jpg"}
]


app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {

    res.render("campgrounds", {camps: camps})

})

app.post("/campgrounds", (req, res) => {

    // Get data from form & add to camps array
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = { name: name, image: image }
    camps.push(newCamp);
    // Redirect back to campgrounds page
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", (req, res) => {
    res.render("new")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("GoCamping app is running")
})