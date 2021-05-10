import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll } from '../types';
@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  getPolls(): Observable<Poll[]> {
    return of([
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
    ]).pipe(delay(2000));
  }

  vote(pollId:number,voteNumber:number) {
    console.log(pollId,voteNumber);
  }

  createPoll(question:string,thumbnail:string,options:string[]) {
    console.log(thumbnail,question,options)
  }
}
