
export default class SkillsService{
    constructor(){
        this.skills = {}
    }

    getSkillsBeToTypes(skillType){
        var data = require("../assets/skills/" + skillType);
        return data;
    }

    getUserSkills = () => {
        function getAllSkillTypes() {
            var rFiles = require.context('../assets/skills/', true, /\.json$/);
            return rFiles.keys().map(file => file.split('./')[1].split('.json')[0])
        }

        var skillTypes = getAllSkillTypes();

        skillTypes.forEach(skillType => {
            var skills = this.getSkillsBeToTypes(skillType);
            var skillsIcons = Object.keys(skills).map(skillIcon => {
                try {
                    return require("../assets/images/skills-icons/" + skillIcon + ".png");
                }catch (e) {
                    console.log("Error: Couldn't find file:", "../assets/images/icons/" + skillIcon)
                }
            });

            this.skills[skillType.substring(2)] = {
                'skills': skills,
                'skillsIcons': skillsIcons
            };
        });

        return this.skills;
    }
}