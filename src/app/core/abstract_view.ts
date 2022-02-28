import { Router } from '@angular/router';

import { View } from './view';

export abstract class AbstractView implements View {
  constructor(public router?: Router) {}

  showSuccess(title: string, message: string): void {
    console.log(title);
  }
}
