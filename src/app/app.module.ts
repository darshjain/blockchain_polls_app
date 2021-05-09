import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollComponent } from './poll/poll.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';

@NgModule({
  declarations: [AppComponent, PollCreateComponent, PollComponent, PollVoteComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
