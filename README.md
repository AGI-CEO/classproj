# classproj

Exercise Requirements:
The goal of this exercise is to build fluency with creating full stack applications.

Once you have completed the exercise, submit your solution repo here.

Afterwards, start again from scratch and do it again faster.

Once you feel comfortable with everything, speed is key, keep rebuilding until you can do this exercise from start to finish in 1 hour or less.

For the following exercise, complete these deliverables:

ERD Diagram (shown to instructional staff)
Client-Server-Database Diagram (shown to instructional staff)
Create a Database
ExpressJS Server connected to the Database
Frontend JS that talks to the Server through an AJAX call These are minimum requirements
Deliverables in Detail
Diagrams
Create two diagrams:
ERD
2 x Tables with a One-To-Many Relationship
Client - Server - Database
How do you draw a picture to show how these systems are connected
What information travels between each system?
How do they talk to each other?
What does each system do?
Show these diagrams to instructional staff for feedback and approval.

Create Database
2 x Tables with a One-To-Many Relationship
Add at least 15 records
Create Server
Install PG
Connect to DB
Setup Middlewares
Bodyparser
Cors
Morgan
Create CRUD Routes for a single resource
important: Make all your routes begin with the url path /api/. e.g. app.get('/api/cats',...)
Queries the DB then sends appropriate data
Frontend
Add this line to your "server.js" file, above all of your routes: app.use(express.static('public')) (this line ensures that anyone visiting the "root path" of your server, "localhost:3000/", will receieve an "index.html" page, and not go in to a route)
Create "public/index.html" page
Create "public/app.js" page
Connect app.js to index.html
In app.js, make an AJAX call to your server route and display some data
For minimum requirement: You only need to make an AJAX request to a single API route
Submit Deliverables
