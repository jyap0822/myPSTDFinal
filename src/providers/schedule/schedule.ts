import { Injectable, Pipe } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Schedule } from "../../models/schedule";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { switchMap } from 'rxjs/operators';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleProvider {
  data: Array<any> = [];
  schedules: Observable<Schedule[]>;
  dayOne: BehaviorSubject<any>;
  dayTwo: BehaviorSubject<any>;
  constructor(public afs: AngularFirestore) {
    this.dayOne = new BehaviorSubject(1);
    this.dayTwo = new BehaviorSubject(2);
    console.log('Hello SpeakerProvider Provider');
  }

  getDayOneSchedule() {
    this.schedules = this.dayOne.pipe(switchMap(day => this.afs.collection<Schedule>('schedule', ref => ref.where("day", '==', day).orderBy('order', "asc")).valueChanges(), ), );
    console.log(this.schedules);
    return this.schedules
  }

  getDayTwoSchedule() {
    this.schedules = this.dayTwo.pipe(switchMap(day => this.afs.collection<Schedule>('schedule', ref => ref.where("day", '==', day).orderBy('order', "asc")).valueChanges(), ), );
    return this.schedules
  }
}
