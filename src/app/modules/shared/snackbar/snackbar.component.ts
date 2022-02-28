import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  message = '';

  constructor() {}

  ngOnInit(): void {
    this.showSnackbar();
  }

  showSnackbar() {
    let x: any = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  }
}
