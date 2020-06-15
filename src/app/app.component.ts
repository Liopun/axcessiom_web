import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `

    <!-- header -->
    <app-general-header></app-general-header>

    <!-- body -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-general-footer></app-general-footer>
  `,

})
export class AppComponent {

  public constructor(private titleService: Title ) {
    titleService.setTitle("Axcessiom Technologies ")
   }

}
