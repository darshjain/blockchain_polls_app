import { AfterViewInit, Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { PollVote } from '../types';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options:string[];
  @Input() results:number[];
  @Input() question:string;
  @Input() id:number;

  @Output() pollVoted: EventEmitter<PollVote>= new EventEmitter();

  voteform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.voteform = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    if (this.voted) {
      this.generateChart();
    }
  }
  submitForm() {
    // console.log(this.voteform.value);
    const pollVoted:PollVote={
      id: this.id,
      vote:this.voteform.get("selected").value,
    }
    this.pollVoted.emit(pollVoted);
  }
  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [
        {
          data: this.results,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: this.options,
      },
    };
    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );
    chart.render();
  }
}
