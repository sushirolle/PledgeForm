# Pledge Form

This code is meant to serve as a simple form a charitable organization may use to collect donations.

## Getting Started

```
1. Download this source code through github
```
```
2. Nagivate into the root directory, project-code, using your terminal or command line 
```
```
3. Run "npm start" to launch the project
```
```
4. Navigate to localhost:3000
```
```
5. Fill out the pledge form successfully to get a custom thank-you page!
```

## Prerequisites

```
You will need npm: https://www.npmjs.com/get-npm
```

### Database Editing

To save time and make this project easier to download and test, pledge information is saved to a JSON file 
serving as a local "database". If you want to clear out this file to start a new set of entries, here is how
you can do so:

```
1. Navigate to project-code/database
```
```
2. Open entries.json
```
```
3. Replace all text with the following: {"donations":[]}
```
```
4. Save this file and restart your project
```


### Overall Approach

To create this project, I first had to decide on the code stack I would utilize. As I had limited time and the overall objective was simple in that it did not mandate a database connection, specific plugins or libraries, etc. I decided to use node.js with express and HTML/pug, as they are lightweight, have up-to-date documentation and I have previously completed personal projects using these tools.

For the front-end, I focused on a user-interface that was uncluttered, easy to navigate and clearly demonstrated the overall objective of the site. As the nonprofit I invented for the purpose of this project specializes in wildlife rescue, I chose a corresponding color scheme and added an "About This Organization" section underneath the form to encourage users to sympathize with their cause.

For the back-end, I tried to keep it modular and simple so sections could be added and modified with minimal overhead. I did this through utilizing external libraries to reduce custom code I would have to write (such as the library used for form masking) and instead focused on creating easily readable methods. 

## Thoughts

### What was easy?

I was already familiar with routing in Node.js, as well as handling basic HTTP endpoints
I was familiar with Bootstrap and its applications 
I had worked with Node.js, Express, Jquery and HTML5


### What was difficult?

I have little experience with user experience and front-end design
I have never rendered HTML using Pug
I have never saved JSON data to a file instead of a database


## Credits

I used BootstrapThemes, W3 school tutorials and StackOverflow to aid me in this project.


## Authors

* **Naomi Sokolova** 


