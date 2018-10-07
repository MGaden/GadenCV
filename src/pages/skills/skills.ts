import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {

  constructor(public navCtrl: NavController,private dataService: DataProvider) {

  }

  data: Object;
  skills: Skill[];

  getProjects(): void {
    this.data = this.dataService.getSkills();
    this.skills = <Skill[]>this.data;
  }

  ngOnInit() {
    this.getProjects();
  }

}


class Skill {
  id: number;
  title: string;
}
