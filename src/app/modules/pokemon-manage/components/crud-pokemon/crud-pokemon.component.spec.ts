import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPokemonComponent } from './crud-pokemon.component';

describe('CrudPokemonComponent', () => {
  let component: CrudPokemonComponent;
  let fixture: ComponentFixture<CrudPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
