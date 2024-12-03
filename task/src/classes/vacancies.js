export class Vacancy{
    id;
    title;
    companyId;
    description;
    salary;
    postedAt;
    expiresAt;
    employmentType;
    isActive;
    candidates;
    constructor(title, companyId, description, salary, expiresAt, employmentType){
        this.id = nanoId();
        this.title = title;
        this.companyId = companyId;
        this.description = description;
        this.salary = salary;
        this.postedAt = new Date();
        this.expiresAt = expiresAt;
        this.employmentType = employmentType;
        this.isActive = true;
        this.candidates = [];
    }
}