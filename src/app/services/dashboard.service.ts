import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOSPITAL_API } from '../endpoints/api-urls';
import { map } from 'rxjs/operators';
import { HospitalData, HospitalDataResponseI } from '../interfaces/hospitalDataI';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public state: BehaviorSubject<any> = new BehaviorSubject(null);
  public state$ = this.state.asObservable();

  public getHospitalData(state: string) {
    const url = HOSPITAL_API;

    return this.httpClient.get(url).pipe(
      map((res: any[]) => res.filter((x) => new HospitalData(x))),
      map((res: HospitalDataResponseI[]) => res.find((x) => x.period === '2015' && x.region === state),
      ));
  }

  public getDistinctStates() {
    const url = HOSPITAL_API;

    return this.httpClient.get(url).pipe(
      map((res: HospitalDataResponseI[]) => res.map((x) => x.region)),
      map((res: string[]) => Array.from(new Set(res))),
      map((res: string[]) => res.filter((x) => !!x)),
    );
  }

  public setState(state: string) {
    this.state.next(state);
  }

  public getState() {
    return this.state$;
  }
}
