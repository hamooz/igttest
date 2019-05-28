/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlideshowjumboComponent } from './slideshowjumbo.component';

describe('SlideshowjumboComponent', () => {
  let component: SlideshowjumboComponent;
  let fixture: ComponentFixture<SlideshowjumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowjumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowjumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
