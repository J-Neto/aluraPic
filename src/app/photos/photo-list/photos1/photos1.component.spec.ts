import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photos1Component } from './photos1.component';

describe('Photos1Component', () => {
  let component: Photos1Component;
  let fixture: ComponentFixture<Photos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Photos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
