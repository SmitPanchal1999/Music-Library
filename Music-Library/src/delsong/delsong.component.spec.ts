import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelsongComponent } from './delsong.component';

describe('DelsongComponent', () => {
  let component: DelsongComponent;
  let fixture: ComponentFixture<DelsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
