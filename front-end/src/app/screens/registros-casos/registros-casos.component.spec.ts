import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosCasosComponent } from './registros-casos.component';

describe('RegistrosCasosComponent', () => {
  let component: RegistrosCasosComponent;
  let fixture: ComponentFixture<RegistrosCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosCasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
