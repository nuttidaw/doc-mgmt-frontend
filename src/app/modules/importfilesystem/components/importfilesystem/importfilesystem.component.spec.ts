import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportfilesystemComponent } from './importfilesystem.component';

describe('ImportfilesystemComponent', () => {
  let component: ImportfilesystemComponent;
  let fixture: ComponentFixture<ImportfilesystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportfilesystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportfilesystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
