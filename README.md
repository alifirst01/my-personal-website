Personal site for Ali Asgher.
http://ali-asgher.com

## Getting Started
- Install Nodejs and npm on your machine.
- Clone this repo
  ```
  git clone https://github.com/alifirst01/my-personal-website.git
  ```
- Install dependencies
  ```
  cd my-personal-website
  npm install
  ```
- Run the app in the development mode
  ```
  npm run start
  ```
  Open http://localhost:8080 to view it in the browser.
  The page will reload if you make edits.
- Build the app for production
  ```
  npm run build
  ```
  Builds the app for production to the build folder. Deploy the build folder on a hosting platform with a public url.


## Technologies
### Language
  - Javascript(ES6)
  - [Sass](https://sass-lang.com/) - an extension of CSS for writing organized CSS and creating variables.
### Framework
  - [ReactJs](https://reactjs.org/) - Javascript frontend framework for creating interactive UIs.
### Libraries
  - [browserify](http://browserify.org/) - to support NodeJS 'require' functionality inside client's browser and modularise the code into files.
  - [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel) - An easily customizable carousel component for React apps.
  - [React Reveal](https://www.npmjs.com/package/react-reveal) - To add various cool reveal on scroll animations in the application.
  - [React Font Awsome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) - to use various icons in the application.
  - [React Bootstrap](https://react-bootstrap.github.io/) - to use bootstrap components inside react.
  - [Babel](https://babeljs.io/) - for transcompiling to ES6 code into a backwards compatible version of JavaScript in current and older browsers.
  - [Webpack](https://webpack.js.org/) for bundling the assets and code splitting.
  

## Customization
### Components
  There are 6 main components
  - [Home](https://github.com/alifirst01/my-personal-website/blob/master/src/components/Home.js)
  - [About](https://github.com/alifirst01/my-personal-website/blob/master/src/components/About/About.js)
  - [Skills](https://github.com/alifirst01/my-personal-website/blob/master/src/components/About/Skills.js)
  - [Projects](https://github.com/alifirst01/my-personal-website/blob/master/src/components/Projects/Projects.js)
  - [Employment](https://github.com/alifirst01/my-personal-website/blob/master/src/components/Employment/Employment.js)
  - [Contact](https://github.com/alifirst01/my-personal-website/blob/master/src/components/Contact.js)
  
  Aside from these, there are [Navbar](https://github.com/alifirst01/my-personal-website/blob/master/src/components/Navbar.js) and [Sidebar](https://github.com/alifirst01/my-personal-website/blob/master/src/components/Sidebar.js) components for navigation and links.
  To add a new component, create a react component js file and refer it inside [App.js](https://github.com/alifirst01/my-personal-website/blob/master/src/App.js) component.
  
### Content
#### Skills
  - To modify the skills displayed in about section, go to [skills](https://github.com/alifirst01/my-personal-website/tree/master/src/assets/skills) directory under src/assets directory and create a new json file with name value pairs specifying different skills. The name of the file will show up as the heading in about section and all skills specified inside that file will be listed under the heading. The proficiency level of a skill is determined by its value - ranging from 0 to 100.
  - In order to change the image displayed alongside each skill, go to the [Skills icons](https://github.com/alifirst01/my-personal-website/tree/master/src/assets/images/skills-icons) under src/assets/images directory and create a .png file of that skill. The name of the .png file should be the exact same as the skillname in order for it to get displayed alongside that skill.
#### Projects
  - To change the content of projects or add new projects to your website, go to [Projects Content](https://github.com/alifirst01/my-personal-website/tree/master/src/assets/projects_content) folder and create/modify json file for each individual project. Each project file should have a title, external link, github link, description and list of technologies used. 
  - The technologies used in different projects are displayed as images below the project description therefore for each technology listed in the project's file, create a corresponding .png file inside [icons](https://github.com/alifirst01/my-personal-website/tree/master/src/assets/images/icons) directory.
  - The slideshow images belonging to a project should be placed under src/assets/images/projects/name-of-project directory. The order of images in the slider is determined by the filenames (e.g. 1.png, 2.png, 3.png).
  - The order of projects on the webpage is determined by the number specified in their filenames inside [Projects Content](https://github.com/alifirst01/my-personal-website/tree/master/src/assets/projects_content) directory.
#### Employment
 - To add/change employment history, add or modify json files inside [employment](https://github.com/alifirst01/my-personal-website/blob/master/src/assets/employment) directory. Each employment file should have a title, company, companyAbbr(to display on small screens), location, logo(name of image file placed under [companies logos](https://github.com/alifirst01/my-personal-website/tree/master/src/assets/images/companies-logos) directory), url, current, startDate, endDate, jobDuration, description.
  - The description of job contains a list of key value pairs inorder to support sublists. Each key value pair represents a task performed on the job with the main task as key string and value as an array of subtasks.
  - The order of employment history is determined by filename inside [employment](https://github.com/alifirst01/my-personal-website/blob/master/src/assets/employment) directory.
  
#### Home, About, Navbar, Sidebar & Contact
 - To change the content of Home, About, Navbar, Sidebar & Contact, go to their respective component file inside src/components and modify the texts and links. 

### Application Theme
#### Variables
The [variables](https://github.com/alifirst01/my-personal-website/blob/master/src/styles/globals/_variables.sass) sass file under src/styles/globals directory contains all variables controlling the theme of application. You can modify the rgb values there to change the color scheme of different components in the application.
#### Tags
The [html_tags](https://github.com/alifirst01/my-personal-website/blob/master/src/styles/globals/_htmltags.sass) sass file defines the default css for html basic elements like h1, h2, p tags etc. Modify the default color, font-size of these elements inside that file. 
#### Components CSS
All the custom css for different components of the applications are put inside [styles/themes](https://github.com/alifirst01/my-personal-website/tree/master/src/styles/themes) directory. 

## Contribute
This repository is not open for editing right now. If you wish to make edits, by all means, fork the repo and make your edits in your own copy of the repo. 

## License
Copyright © 2019 Ali Asgher. Project source code is licensed under the MIT license. If you fork this repository for your own personal project, please give proper credit by linking back to my website, http://ali-asgher.com. DO NOT use for the purpose of business or claim this work as your own.
