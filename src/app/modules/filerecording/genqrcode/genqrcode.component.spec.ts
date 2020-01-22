import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenqrcodeComponent } from './genqrcode.component';

describe('GenqrcodeComponent', () => {
  let component: GenqrcodeComponent;
  let fixture: ComponentFixture<GenqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
