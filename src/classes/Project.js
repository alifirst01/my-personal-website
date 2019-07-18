
export default class Project{
    constructor(title, description, images, technologies, techIcons, githubLink, externalLink){
        this.data = {
            title: title,
            description: description,
            githubLink: githubLink,
            externalLink: externalLink,
            technologies: technologies,
        };
        this.techIcons = techIcons;
        this.images = images;
    }
}