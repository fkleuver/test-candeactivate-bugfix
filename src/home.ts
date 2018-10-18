import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework'

@inject(Router)
export class Home {

  constructor(private router: Router) {
  }

  btnNext_click() {
    this.router.navigate('nextpage');
  }
}
