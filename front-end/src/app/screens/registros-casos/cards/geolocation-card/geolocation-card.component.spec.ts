import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationCardComponent } from './geolocation-card.component';

describe('GeolocationCardComponent', () => {
  let component: GeolocationCardComponent;
  let fixture: ComponentFixture<GeolocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
