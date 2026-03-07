import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Venusaur } from './venusaur';

describe('Venusaur', () => {
  let component: Venusaur;
  let fixture: ComponentFixture<Venusaur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Venusaur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Venusaur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
