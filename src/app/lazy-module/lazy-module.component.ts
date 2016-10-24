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
  styleUrls: ['./lazy-module.component.css'],
  providers:[MyButtonServiceService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(0)'})),
      transition('in <=> out', [
        animate(2000, keyframes([
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.4}),
          style({opacity: 0, transform: 'translateX(90%)', offset: 0.6}),
          style({opacity: 0, transform: 'translateX(-15px)', offset: 0.8}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 1.0}),
        ]))
      ])
    ])
  ]
})
export class LazyModuleComponent implements OnInit {
intervel;
n:number=0;
  constructor(private router: Router, private r: ActivatedRoute, private studyService: MyButtonServiceService, public af: AngularFire ) {
    this.intervel=setInterval(() => {
      this.n++;
      if(this.n==15) {
      this.ok();
      }
      console.log(this.n);
    },1000);
  }
studymaterials = ['1 in every 5 indian men admit to forcing their wifes into sex, according to a 2011 study by the international center for Research on women'];
  next:number=0;
  state:string="in";
  study:string[]=['hello this is messsage1','hello this is messsage2','hello this is messsage3','hello this is messsage4','1 in every 5 indian men admit to forcing their wifes into sex, according to a 2011 study by the international center for Research on women']
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
  ok(){
      this.state==="in"?this.state="out":this.state="in";
      this.nextValue();
      this.n=0;
    }
  nextValue(){ 
      this.studymaterials.pop();
      this.studymaterials.push(this.study[this.next++]);
      this.next===this.study.length?this.next=0:this.next=this.next;
  }
}
