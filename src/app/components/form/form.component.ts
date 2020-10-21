import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HospitalDataResponseI } from 'src/app/interfaces/hospitalDataI';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  constructor(private service: DashboardService) { }

  public stateObject: HospitalDataResponseI;
  public subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.service.getState().pipe(
        switchMap((res) => this.service.getHospitalData(res)))
        .subscribe((res) => this.stateObject = res));

  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
