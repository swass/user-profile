import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-learning',
  templateUrl: './ngrx-learning.component.html',
  styleUrls: ['./ngrx-learning.component.css']
})
export class NgrxLearningComponent implements OnInit {
  showNotes: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
