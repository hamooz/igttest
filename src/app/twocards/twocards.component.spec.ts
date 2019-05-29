/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwocardsComponent } from './twocards.component';

describe('TwocardsComponent', () => {
  let component: TwocardsComponent;
  let fixture: ComponentFixture<TwocardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwocardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
