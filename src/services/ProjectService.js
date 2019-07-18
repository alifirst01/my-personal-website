import Project from "../classes/Project";

export default class ProjectService{
    constructor(){
        this.projectsData = {}
    }

    getProjectData(projectName){
        var data = require("../assets/projects_content/" + projectName + ".json");
        var allImages = require.context("../assets/images/projects/", true, /\.(png|gif|ico|jpg|jpeg)$/);

        projectName = projectName.substring(2);
        var projectImages = allImages.keys().filter(image => {
            return image.includes(projectName)
        });
        var images = projectImages.map(image => {
            try {
                let imagePath = projectName + "/" + image.split('/').pop();
                return require("../assets/images/projects/" + imagePath);
            }catch (e) {
                console.log("Error: Couldn't find file:", "../assets/images/projects/" + image.split('/').pop())
            }

        });
        var techIcons = data.technologies.map(tech => {
            try {
                return require("../assets/images/icons/" + tech + ".png");
            }catch (e) {
                console.log("Error: Couldn't find file:", "../assets/images/icons/" + tech)
            }
        });
        let projectData = new Project(data.title, data.description, images, data.technologies, techIcons, data.github, data.external);
        return projectData;
    }

    getAllProjectsData = (projectName) => {
        function getAllProjects() {
            var rFiles = require.context('../assets/projects_content/', true, /\.json$/);
            return rFiles.keys().map(file => file.split('./')[1].split('.json')[0])
        }

        var listOfProjects = getAllProjects();

        listOfProjects.forEach(project => {
            this.projectsData[project] = this.getProjectData(project);
        });

        return this.projectsData;
    }
}