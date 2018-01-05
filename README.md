# NODE-JS-Success-Engineer
Documentation for new success engineers

## Back End Intro

### Download Postman

- Let's us make http request and view responses, to debug when data is not coming back as we wanted it to.

- http request are independent of browsers, something to keep in mind.

- now if we make a request, go to www.google.com

    - we will be using http verbs to tell the server what to do with the request
    - retrieving data from the server would be a GET request
    - uploading, submitting, sending data would be a POST request
    - PUT and PATCH, would be requests to edit or updates
    - DELETE request, does exactly what it sounds like it.
    - these are all protocol, so if I say this is a delete request, then we should expect that it will delete something.

- So after we make a GET request on postman to google we will get a response:

    - the body of the response ie the html, css, js etc...
        - headers, ie like the meta data about the response, they contain info like:
            - content type = which is the language it will respond back to the client in.
            - date and time, when the request and response took place.
            - status: a number, 202, 404 etc... part of protocol of http, standardized way to say that the request that was made is fine and sends back status code 200.
            - you can send data with a query string using a GET request, and if the server is expecting a name parameter then it will respond.


### In Postman:

- make a GET request to reddit.com and click on params and what that will let you do, is add a url parameter, key+value and postman will make the request and add the string.
    - click send and go to the body, we get a bunch of html and css where you can isolate
    - go to the body, depending on the type of request, if it is a post request, you can pass in the parameters from the body tag in the form-data.


### What is a Module in Node.js?

- Node.js has a set of built-in modules which you can use without any further installation.

### Include Modules

- To include a module, use the require() function with the name of the module:
    - see http.js file with detailed notes on requiring http and running a createServer

### Behind the Scenes:

- After a request is made to googles server, there will be code on the server that will be listening for different requests and responding with diff pieces:

    - starting the server in the "http.js" file, and the app will be hosted on localhost 8080
    - in our terminal, we run the name of the command "node http.js"
    - it will tell us hopefully, someone made a GET request to the url / with a status 200
    - try doing this in postman also, with diff routes as well
    - our apps will have the following:
        - dependancies, setting up a database, routes.
