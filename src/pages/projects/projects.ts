import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {

  constructor(public navCtrl: NavController,private dataService: DataProvider) {

  }

  data: Object;
  projects: Project[];

  getProjects(): void {
    this.data = this.dataService.getProjects();
    this.projects = <Project[]>this.data;
  }

  ngOnInit() {
    this.getProjects();
  }

}


class Project {
  id: number;
  name: string;
  summary: string;
  details:string;
}

