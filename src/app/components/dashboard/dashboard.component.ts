import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService) { }

  public subscriptions = new Subscription();
  public statesList: Observable<string[]>;
  public state: FormControl;

  @Output() public stateChanged = new EventEmitter<any>();

  ngOnInit(): void {
    this.state = new FormControl('');
    this.statesList = this.service.getDistinctStates();

    this.subscriptions.add(
      this.state.valueChanges.pipe(
        distinctUntilChanged()
      ).subscribe((state) => this.service.setState(state)));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
