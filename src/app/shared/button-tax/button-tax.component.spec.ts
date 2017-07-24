import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTaxComponent } from './button-tax.component';

describe('ButtonTaxComponent', () => {
  let component: ButtonTaxComponent;
  let fixture: ComponentFixture<ButtonTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
