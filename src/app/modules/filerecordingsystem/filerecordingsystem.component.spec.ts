import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerecordingsystemComponent } from './filerecordingsystem.component';

describe('FilerecordingsystemComponent', () => {
  let component: FilerecordingsystemComponent;
  let fixture: ComponentFixture<FilerecordingsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilerecordingsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilerecordingsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
