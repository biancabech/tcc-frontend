import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitCuturalComponent } from './fit-cutural.component';

describe('FitCuturalComponent', () => {
  let component: FitCuturalComponent;
  let fixture: ComponentFixture<FitCuturalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitCuturalComponent]
    });
    fixture = TestBed.createComponent(FitCuturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
