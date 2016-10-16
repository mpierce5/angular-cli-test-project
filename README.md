Creating a new project using Angular CLI
1. Install nodejs/npm
2. npm install -g angular-cli
3. ng new my-new-project (creates a folder in the directory your in and puts your project there)
4. ng generate (cl: class, c: component, d: directive, e: enum, m: module, p: pipe, s: service) (uses best practices)
5. ng generate component header
6. ng generate module foo --routing
7. ng generate component path/to/header
8. ng serve 
	a. compiles SCSS/LESS
	b. TypeScript transpilation
	c. Bundles JavaScript, CSS
	d. Asset Optimization
	e. Virtual filesystem for assets
	f. live loading via websockets
	g. code splitting (lazy loading)
	
9.  ng build --prod --bh /Angular%202%20Training/angular-cli-project/dist/ (create production app with root html pointing at production folder)

10. (add to package.json

	"@types/socket.io": "^1.4.27",
    "@types/socket.io-client": "^1.4.27",
    "socket.io": "~1.4.8",
    "socket.io-client": "~1.4.8",
	)
10. install types for socket.io (npm install --save @types/socket.io) (npm install @types/socket.io)

11. install karma plugin in intellij (install karma globally using npm - npm install karma -g)

12. to use karma in intellij
  - right click karma.conf.js file
  - create karma.conf.js
  - hit okay
  - hit green run button in the top right of ide
    - Karma tool will launch with test results
	
	
	
	
**
npm install to install dependencies
npm start to start project
ng test to run tests