import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesligamentoComponent } from './desligamento.component';

describe('DesligamentoComponent', () => {
  let component: DesligamentoComponent;
  let fixture: ComponentFixture<DesligamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesligamentoComponent]
    });
    fixture = TestBed.createComponent(DesligamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
