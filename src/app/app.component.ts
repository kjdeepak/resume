import { Component } from '@angular/core';
import {
  faPhoneAlt,
  faEnvelope,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  techList: Array<string> = [
    'Angular',
    'React',
    'Vue',
    'Flutter',
    'Nodejs',
    'Expressjs',
    'MongoDB',
  ];
  socialMediaList: Array<{
    socialPlatformName: string;
    socialPlatformUrlLink: string;
    icon: IconDefinition;
  }> = [
    {
      socialPlatformName: 'Linkedin | K J Deepak',
      socialPlatformUrlLink: 'https://www.linkedin.com/in/deepakkj/',
      icon: faLinkedin,
    },
    {
      socialPlatformName: 'Twitter | @k_j_deepak',
      socialPlatformUrlLink: 'https://twitter.com/k_j_deepak',
      icon: faTwitter,
    },
  ];
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  openSocialMediaLinkOnNewPage(urlLink: string): void {
    if (window) {
      window.open(urlLink, '_blank');
    }
  }
}
