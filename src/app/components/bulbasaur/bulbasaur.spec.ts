import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bulbasaur } from './bulbasaur';

describe('Bulbasaur', () => {
  let component: Bulbasaur;
  let fixture: ComponentFixture<Bulbasaur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bulbasaur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bulbasaur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
