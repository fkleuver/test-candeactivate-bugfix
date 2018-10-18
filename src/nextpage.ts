
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework'

@inject(Router)
export class Nextpage {
  cancelContinue = false;

  constructor(private router: Router) {
  }

  btnBackWithCancel_click() {
    this.cancelContinue = false;
    this.router.navigateBack();
  }

  btnBackTwoWithCancel_click() {
    this.cancelContinue = false;
    (<any>this.router.history).history.go(-2);
  }

  btnBackWithProceed_click() {
    this.cancelContinue = true;
    this.router.navigateBack();
  }

  btnHomeWithProceed_click() {
    this.cancelContinue = true;
    this.router.navigate('home');
  }

  canDeactivate() {
    return this.cancelContinue;
  }

}
