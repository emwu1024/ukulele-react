# ukulele-react

## To start project:

### Client - Frontend
1. Navigate to the 'client' directory from the terminal
<code>cd client</code>

2. Run command <code>npm run dev</code>

### Server - Backend
1. Navigate to the 'server' directory from the terminal
<code>cd server</code>

2. Run command <code>node server.js</code>





## Learnings:
- For connecting MongoDB to the Frontend for MERN stack I followed this tutorial: https://www.mongodb.com/languages/mern-stack-tutorial
  - Issue: I was not getting the message 'Successfully connected to MongoDB.' when running the server.
  - Reason: The tutorial used an outdated version of mongodb node.js driver, newer versions of the driver no longer support hte callback function
  - Solution: I followed the code in this tutorial to properly get the DB connected: https://www.mongodb.com/community/forums/t/mern-stack-tutorial-guide-doesnt-work/222971/3
  