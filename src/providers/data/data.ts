import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as projects from "../../assets/data/projects.json";
import * as skills from "../../assets/data/skills.json";
import * as experiences from "../../assets/data/experience.json";
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  
  constructor(public http: HttpClient) {
    
  }

  getProjects(){
    return projects;
  }

  getSkills(){
    return skills;
  }

  getExperience(){
    return experiences;
  }


}

