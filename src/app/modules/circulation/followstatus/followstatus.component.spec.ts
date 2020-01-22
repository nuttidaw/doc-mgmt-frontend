import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowstatusComponent } from './followstatus.component';

describe('FollowstatusComponent', () => {
  let component: FollowstatusComponent;
  let fixture: ComponentFixture<FollowstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
