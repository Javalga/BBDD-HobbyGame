export class Person {
  constructor(private name: string, private nationality: string, private profession: string, private experienceYears: number) {
    this.name = name;
    this.nationality = nationality;
    this.profession = profession;
    this.experienceYears = experienceYears;
  }
  public setName(newName: string) {
    this.name = newName
  }
  public setNationality(newNationality: string) {
    this.nationality = newNationality
  }
  public setProfession(newProfession: string) {
    this.profession = newProfession
  }
  public setExperienceYears(newExperienceYears: number) {
    this.experienceYears = newExperienceYears
  }
  public getName() {
    return this.name
  }
  public getNationality() {
    return this.nationality
  }
  public getProfession() {
    return this.profession
  }
  public getExperienceYears() {
    return this.experienceYears
  }
  public isTheSamePerson(person: Person): boolean {
    if (this.name === Person.name && this.nationality === person.nationality && this.profession === person.profession && this.experienceYears === person.experienceYears) {
      return true
    } else return false
  }
  public printProps() {
    console.log(this.name);
    console.log(this.nationality);
    console.log(this.profession);
    console.log(this.experienceYears);
  }
  public toString() {
    console.log(`Name:\t${this.name}\nNationality:\t${this.nationality}\nProfession:\t${this.profession}\nExperience Years:\t${this.experienceYears}`);
  }
}

