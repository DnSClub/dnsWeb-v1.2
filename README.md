# DNS Website

## Folder Structure

```bash
.
├── public
│   ├── index.html                            # runs on one HTML file
│   └── ...
└── src
    ├── components
    │   └── Nav
    │       └── Nav.js
    ├── pages
    │   ├── Home
    │   │   └── HomePage.js
    │   ├── Contact
    │   │   └── ContactPage.js
    │   └── Projects
    │       └── ProjectsPage.js
    ├── index.css
    ├── App.js
    └── index.js
```

## Running the DNS Website

To run the website, you will need to have Node 10.16 or higher and npm 5.6 or higher installed on your machine.

Make sure to install the following before running the server:
### `npm install react-icons`

Once installed, cd into the project directory and run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Hosting on GitHub Pages

To push changes to the GitHub Pages server, run this command in the terminal:
### `npm run deploy`

Wait until it finishes pushing everything and then the changes will be added to the queue.
It'll take a few minutes for the changes to appear on the website.

## Encountering Errors

If there are any errors, try running:

### `npm install`

Installs all the dependencies from package.json that the projects needs and stores them in the node_modules folder.

If you encounter an error similar to:

```
Module not found: Error: Can't resolve 'react-router-dom' in 'D:\Github\dnsWeb\src'
ERROR in ./src/App.js 4:0-49
Module not found: Error: Can't resolve 'react-router-dom' in 'D:\Github\dnsWeb\src'
```

Run:

 ### `npm install react-router-dom --save`

 If there are vulnerabilities you can ignore them or fix them.
