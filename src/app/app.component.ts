import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  activePoll = null;
  polls: Poll[] = [
    {
      id: 1,
      question: 'DOGS > CATS',
      thumbnail:
        'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg',
      results: [5, 7, 1],
      options: ['cats', 'dogs', 'lambs'],
      voted: true,
    },
    {
      id: 2,
      question: 'BATS >= CATS',
      thumbnail:
        'https://image.shutterstock.com/image-photo/good-night-sleep-well-mixed-260nw-495349684.jpg',
      results: [5, 7, 12],
      options: ['cats', 'dogs', 'none'],
      voted: false,
    },
  ];
  setActivePoll(poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
