import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, AuthProviders, AngularFireModule, AuthMethods } from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';
import { 
  Input,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes } from '@angular/core';
import { Subscription }  from 'rxjs/Subscription';
import { MyButtonServiceService } from './my-button.service';

@Component({
  selector: 'app-lazy-module',
  templateUrl: './lazy-module.component.html',
  styleUrls: ['./lazy-module.component.css']
})
export class LazyModuleComponent implements OnInit {

  constructor(private router: Router, private r: ActivatedRoute, private studyService: MyButtonServiceService, public af: AngularFire ) {
    studyService.studyConfirmed$.subscribe(studymaterial => {
      setTimeout(() => {
        this.studymaterials.push(studymaterial)}, 1000);
        
    });
     studyService.studyAnnounced$.subscribe(nextbutton => {
      this.nextconfirm = !this.nextconfirm;    
    });
  }
studymaterials = ['1 in every 5 indian men admit to forcing their wifes into sex, according to a 2011 study by the international center for Research on women'];
  nextconfirm = false;
  ngOnInit() {
  }
  onSelect(viewsobj: string) {
    switch(viewsobj)
    {
      case 'Education':
       this.router.navigateByUrl("main/consent/edu");
       break; 
       case 'Preference':
       this.router.navigateByUrl("main/consent/pref");
       break; 
       case 'Purpose':
       this.router.navigateByUrl("main/consent/purpose");
       break; 
       case 'Testimonials':
       this.router.navigateByUrl("main/consent/testimonial");
       break; 
       case 'Donate':
       this.router.navigateByUrl("main/consent/donate");
       break; 
       case 'Contact':
       this.router.navigateByUrl("main/consent/contact");
       break; 
    }
}

}
