import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonajes } from './detalle-personajes';

describe('DetallePersonajes', () => {
  let component: DetallePersonajes;
  let fixture: ComponentFixture<DetallePersonajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePersonajes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
