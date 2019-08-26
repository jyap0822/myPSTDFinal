import { Injectable, Pipe } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Speaker } from "../../models/speakers";
import { Download } from "../../models/download";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { switchMap } from 'rxjs/operators';
/*
  Generated class for the SpeakerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpeakerProvider {
  data: Array<any> =[];
  speakers: Observable<Speaker[]>;
  downloads: Observable<Download[]>;
  dayOne: BehaviorSubject<any>;
  dayTwo: BehaviorSubject<any>;
  constructor(public afs: AngularFirestore) {
    this.dayOne = new BehaviorSubject(1);
    this.dayTwo = new BehaviorSubject(2);
    console.log('Hello SpeakerProvider Provider');
  }


  getSpeakers() {
    this.speakers = this.dayOne.pipe(switchMap(day => this.afs.collection<Speaker>('speakers', ref => ref.orderBy('order', "asc")).valueChanges(), ), );
    return this.speakers
  }

  getDayOneDownload() {
    this.downloads = this.dayOne.pipe(switchMap(day => this.afs.collection<Speaker>('download', ref => ref.where("day", '==', day)).valueChanges(), ), );
    console.log(this.downloads);
    return this.downloads
  }

  getDayTwoDownload() {
    this.downloads = this.dayTwo.pipe(switchMap(day => this.afs.collection<Speaker>('download', ref => ref.where("day", '==', day)).valueChanges(), ), );
    return this.downloads
  }
}
