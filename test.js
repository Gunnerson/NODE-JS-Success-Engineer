app.get("/", function(req, res){
  res.sender("home")
});
//listening for a get request for slach
//and when that happens
//we are rendering a page called home
//in theory, we will have a homepage.ejs file that will represent that route


app.get("/dogs", function(req, res){
  dog.find({}, function(err, dogs){
    res.render("dogs",{dogs: dogs}); //rendering a page/template called dogs,
    //but we are passing data to this template
    //so the ejs can be dynamic and take in all diff kinds of data
    //for every dog in the database that we retrieve we will loop through and make a single li with the name and breed
  });
})

// IN SUMMARY WE ARE:
// lsning for a get request to / dogs
// retrrives all of the dogs from database
// rendering the dogs.ejs file
