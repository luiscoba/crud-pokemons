import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractView } from 'src/app/core/abstract_view';
import { Pokemon } from 'src/app/model/pokemon.model';

import { EditView } from './edit.view';
import { EditPresenter } from './presenter/edit.presenter';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent extends AbstractView implements OnInit, EditView {
  pokemon: Pokemon = {};

  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  pokemonForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    attack: new FormControl(''),
    image: new FormControl(''),
    defence: new FormControl(''),
  });

  constructor(
    router: Router,
    public formBuilder: FormBuilder,
    private editPresenter: EditPresenter
  ) {
    super(router);
    editPresenter.view = this;
  }

  ngOnInit(): void {}

  cancel() {
    this.isVisible.emit(false);
  }

  validatePokemon(): void {
    console.log('this.pokemonForm', this.pokemonForm);
    if (this.pokemonForm.valid) {
      this.savePokemon();
    } else {
      console.log('formulario incompleto');
    }
  }
  savePokemon() {
    this.pokemon = this.pokemonForm.value;

    this.editPresenter.createByIdAuthor();
  }
}
