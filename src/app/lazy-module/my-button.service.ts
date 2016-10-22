import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MyButtonServiceService {

  studymission = '<no mission announced>';
  // Observable string sources
  private studyAnnouncedSource = new Subject<string>();
  private studyConfirmedSource = new Subject<string>();

  // Observable string streams
  studyAnnounced$ = this.studyAnnouncedSource.asObservable();
  studyConfirmed$ = this.studyConfirmedSource.asObservable();
  constructor() { }
  // Service message commands
  announceStudy(studymission: string) {
    this.studyAnnouncedSource.next(studymission);
    this.studymission = studymission;
  }

  confirmStudy(nextstudy: string) {
      setTimeout(() => {
        this.studyConfirmedSource.next(nextstudy) }, 2000); 
      setTimeout(() => {
        this.studyConfirmedSource.next('A study in two south asian countries by the UN found that between 74% and 94% of the police said that a husband is allowed to rape his wife.') }, 4000); 
      setTimeout(() => {
        this.announceStudy('next')}, 6000);
    }

}
