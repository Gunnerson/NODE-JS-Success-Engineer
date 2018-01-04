# NODE-JS-Success-Engineer
Documentation for new success engineers

## Back End

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
            
