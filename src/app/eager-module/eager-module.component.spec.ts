/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EagerModuleComponent } from './eager-module.component';

describe('EagerModuleComponent', () => {
  let component: EagerModuleComponent;
  let fixture: ComponentFixture<EagerModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
