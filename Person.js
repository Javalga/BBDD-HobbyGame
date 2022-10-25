"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Person.prototype.setProfession = function (newProfession) {
        this.profession = newProfession;
    };
    Person.prototype.setExperienceYears = function (newExperienceYears) {
        this.experienceYears = newExperienceYears;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.isTheSamePerson = function (person) {
        if (this.name === Person.name && this.nationality === person.nationality && this.profession === person.profession && this.experienceYears === person.experienceYears) {
            return true;
        }
        else
            return false;
    };
    Person.prototype.printProps = function () {
        console.log(this.name);
        console.log(this.nationality);
        console.log(this.profession);
        console.log(this.experienceYears);
    };
    Person.prototype.toString = function () {
        console.log("Name:\t".concat(this.name, "\nNationality:\t").concat(this.nationality, "\nProfession:\t").concat(this.profession, "\nExperience Years:\t").concat(this.experienceYears));
    };
    return Person;
}());
exports.Person = Person;
