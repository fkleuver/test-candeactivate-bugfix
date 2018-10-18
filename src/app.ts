export class App {
  message = 'Hello World!';

  public router: any;
  
  configureRouter(config, router) {
    this.router = router;
    config.title = 'canDeactivate Issue';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home' },
      { route: 'nextpage', name: 'nextpage', moduleId: 'nextpage' }
    ]);
  }
}
