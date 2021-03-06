import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHelpComponent } from './dashboard-help.component';

describe('DashboardHelpComponent', () => {
  let component: DashboardHelpComponent;
  let fixture: ComponentFixture<DashboardHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
