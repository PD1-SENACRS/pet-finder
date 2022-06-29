import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoDetalhadoComponent } from './caso-detalhado.component';

describe('CasoDetalhadoComponent', () => {
  let component: CasoDetalhadoComponent;
  let fixture: ComponentFixture<CasoDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasoDetalhadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
