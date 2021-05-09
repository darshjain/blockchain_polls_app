import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      Question: 'DOGS > CATS',
      image:
        'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg',
      votes: [0, 5, 7, 1],
      voted: true,
    },
    {
      Question: 'BATS >= CATS',
      image:
        'https://image.shutterstock.com/image-photo/good-night-sleep-well-mixed-260nw-495349684.jpg',
      votes: [5, 5, 7, 12],
      voted: true,
    },
  ];
}
