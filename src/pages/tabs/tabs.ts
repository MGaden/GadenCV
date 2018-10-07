import { Component } from '@angular/core';

import { SummaryPage } from '../summary/summary';
import { ExperiencePage } from '../experience/experience';
import { ProjectsPage } from '../projects/projects';
import { SkillsPage } from '../skills/skills';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SummaryPage;
  tab2Root = ExperiencePage;
  tab3Root = ProjectsPage;
  tab4Root = SkillsPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
