import { Component } from '@angular/core';
import { PollService } from './poll-service/poll.service';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  activePoll = null;

  polls=this.ps.getPolls();

  constructor(private ps:PollService){

  }

  setActivePoll(poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
