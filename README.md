Flight Request Web Application
=============================

Overview
--------

This is a web application that allows users to draw polygons on an interactive map and send flight requests to the backend API. The application uses Leaflet.js for mapping and Express.js as the web server framework.

Installation and Running
-----------------------

To run the application, follow these steps:

1. Install Node.js and npm (the package manager for Node.js) if you haven't already.
2. Clone the repository and navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `node server.js` to start the server.
5. Open a web browser and navigate to `http://localhost:3000` to access the application.

Alternatively, you can use the provided `run.sh` script to install Node, initialize a project, install Express, and start the server.

Usage
-----

1. Open the application in your web browser.
2. Draw a polygon on the map by clicking and dragging.
3. Click the "Send Request" button to send the polygon boundary to the backend API.
4. The backend API will process the polygon boundary and return a JSON response.

Technical Details
----------------

The application consists of the following components:

* `server.js`: The main entry point for the web server application, which sets up the Express server and defines routes.
* `routes/flightRequests.js`: Defines routes for handling flight requests, which takes a polygon boundary as a request body and sends a JSON response.
* `controllers/flightRequestController.js`: Handles flight requests by processing polygon boundaries and returning a JSON response.
* `services/flightRequestService.js`: Contains functions for processing polygon boundaries and returning flight request results.
* `db.js`: Database connection and query functions for retrieving flight request results based on polygon boundaries.
* `public/index.html`: The main application page with an interactive map using Leaflet.js.
* `public/js/app.js`: JavaScript code for the client-side application, handling map interactions and sending requests to the backend API.
* `public/css/styles.css`: Styling for the client-side application.

License
-------

This project is licensed under the MIT License.