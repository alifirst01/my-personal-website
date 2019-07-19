import Employment from "../classes/Employment";

export default class EmploymentService{
    constructor(){
        this.employmentHistory = {}
    }

    getEmploymentData(efile){
        var data = require("../assets/employment/" + efile + ".json");
        var logoFile = require("../assets/images/companies-logos/" + data.logo);
        var employmentData = new Employment(data.title, data.company, data.location, data.url, data.current, data.startDate,
                                            data.endDate, data.jobDuration, data.description, logoFile);
        return employmentData;
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