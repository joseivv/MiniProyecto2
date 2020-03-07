import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjuegosComponent } from './newjuegos.component';

describe('NewjuegosComponent', () => {
  let component: NewjuegosComponent;
  let fixture: ComponentFixture<NewjuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewjuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
