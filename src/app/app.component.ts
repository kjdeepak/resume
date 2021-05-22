import { Component } from '@angular/core';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  techList = [
    'Angular',
    'React',
    'Vue',
    'Flutter',
    'Nodejs',
    'Expressjs',
    'MongoDB',
  ];
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
}
