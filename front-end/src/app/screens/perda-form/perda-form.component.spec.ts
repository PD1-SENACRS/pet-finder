import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdaFormComponent } from './perda-form.component';

describe('PerdaFormComponent', () => {
  let component: PerdaFormComponent;
  let fixture: ComponentFixture<PerdaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerdaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
