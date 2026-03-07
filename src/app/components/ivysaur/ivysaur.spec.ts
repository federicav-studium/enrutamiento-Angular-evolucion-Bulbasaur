import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ivysaur } from './ivysaur';

describe('Ivysaur', () => {
  let component: Ivysaur;
  let fixture: ComponentFixture<Ivysaur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ivysaur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ivysaur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
