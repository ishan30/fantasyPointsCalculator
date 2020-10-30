import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let current = 1; // keeps track of the current div
//     const height = ('.roles').height(); // the height of the roles div
//     const numberDivs = ('.roles').children().length; // the number of children of the roles div
//     const first = ('.roles div:nth-child(1)'); // the first div nested in roles div
//     setInterval(function() {
//     const number = current * -height;
//     first.css('margin-top', number + 'px');
//     if (current === numberDivs) {
//         first.css('margin-top', '0px');
//         current = 1;
//     } else { current++; }
// }, 2000);
  }

}
