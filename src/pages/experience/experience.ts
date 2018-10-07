import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html'
})
export class ExperiencePage {

  constructor(public navCtrl: NavController,private dataService: DataProvider) {

  }

  data: Object;
  experiences: Experince[];

  getExperience(): void {
    this.data = this.dataService.getExperience();
    this.experiences = <Experince[]>this.data;
  }

  ngOnInit() {
    this.getExperience();
  }

}


class Experince {
  id: number;
  title: string;
  employeer: string;
  period:string;
  employeerURL: string;
  employeerFace:string;
}
