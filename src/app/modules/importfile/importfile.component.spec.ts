import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportfileComponent } from './importfile.component';

describe('ImportfileComponent', () => {
  let component: ImportfileComponent;
  let fixture: ComponentFixture<ImportfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
