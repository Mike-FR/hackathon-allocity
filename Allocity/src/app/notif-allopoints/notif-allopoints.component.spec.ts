import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifAllopointsComponent } from './notif-allopoints.component';

describe('NotifAllopointsComponent', () => {
  let component: NotifAllopointsComponent;
  let fixture: ComponentFixture<NotifAllopointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifAllopointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifAllopointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
