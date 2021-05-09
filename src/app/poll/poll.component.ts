import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  @Input() Question: string;
  @Input() votes: number[];
  @Input() voted: boolean;
  @Input() PollImage:string;

  numberOfVotes: number;
  constructor() {

  }

  ngOnInit(): void {
    if (this.votes.length) {
      this.numberOfVotes = this.votes.reduce((acc, curr) => {
        return (acc += curr);
      });
    }
  }
}
