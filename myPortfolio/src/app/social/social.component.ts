import { Component, OnInit } from '@angular/core';

interface iSocial {
  name: string,
  link: string,
  img: string
}

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit{

  social: iSocial[] = [];

  ngOnInit(): void {
    this.social.push({name: 'WHATSAPP', link: 'https://api.whatsapp.com/send/?phone=5531983730232&text&type=phone_number&app_absent=0', img: 'assets/icons/wpp.svg'});
    this.social.push({name: 'EMAIL', link: 'mailto:fredericoandrade7@gmail.com', img: 'assets/icons/email.svg'});
    this.social.push({name: 'GITHUB', link: 'https://github.com/Frederico-dos-Santos', img: 'assets/icons/github.png'});
    this.social.push({name: 'LINKEDIN', link: 'https://www.linkedin.com/in/frederico-dos-sant0s/', img: 'assets/icons/linkedin.svg'});
  }

}
