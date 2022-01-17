import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss']
})
export class DefaultFooterComponent implements OnInit {
  socialLinks = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: "assets/linkedin.svg"
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: "assets/twitter.svg"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: "assets/facebook.svg"
    }
  ];
  bottomLinks = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
