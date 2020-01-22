import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindatamgmtComponent } from './maindatamgmt.component';

describe('MaindatamgmtComponent', () => {
  let component: MaindatamgmtComponent;
  let fixture: ComponentFixture<MaindatamgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindatamgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindatamgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
