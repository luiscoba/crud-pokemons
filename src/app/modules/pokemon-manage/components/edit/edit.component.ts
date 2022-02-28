import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  name = new FormControl('');

  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  pokemonForm = this.formBuilder.group({});

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  cancel() {
    this.isVisible.emit(false);
  }
}
