import Employment from "../classes/Employment";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";

export default class EmploymentService{
    constructor(){
        this.employmentHistory = {}
    }

    getEmploymentData(efile){
        var data = require("../assets/employment/" + efile + ".json");
        var logoFile;
        try {
            logoFile = require("../assets/images/companies-logos/" + data.logo);
        }catch (e) {
            console.log("Error: Couldn't find file:", "../assets/images/icons/" + data.logo);
            logoFile = faBuilding;
        }
        return new Employment(data.title, data.company, data.location, data.url, data.current, data.startDate,
            data.endDate, data.jobDuration, data.description, logoFile);
    }

    getEmploymentHistory = () => {
        function getAllEmploymentFiles() {
            var rFiles = require.context('../assets/employment/', true, /\.json$/);
            return rFiles.keys().map(file => file.split('./')[1].split('.json')[0])
        }

        var employmentFiles = getAllEmploymentFiles();

        employmentFiles.forEach(efile => {
            this.employmentHistory[efile] = this.getEmploymentData(efile);
        });

        return this.employmentHistory;
    }
}