import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAnualComponent } from './grafico-anual.component';

describe('GraficoAnualComponent', () => {
  let component: GraficoAnualComponent;
  let fixture: ComponentFixture<GraficoAnualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoAnualComponent]
    });
    fixture = TestBed.createComponent(GraficoAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
