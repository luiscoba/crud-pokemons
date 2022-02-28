import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  name = new FormControl('');

  pokemonForm = this.formBuilder.group({});

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
