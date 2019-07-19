
export default class Project{
    constructor(title, company, location, url, currentlyWorking, startDate, endDate, duration, description, logo){
        this.data = {
            title: title,
            company: company,
            location: location,
            companyUrl: url,
            current: currentlyWorking,
            startDate: startDate,
            endDate: endDate,
            duration: duration,
            description: description,
        };
        this.logo = logo;
    }
}