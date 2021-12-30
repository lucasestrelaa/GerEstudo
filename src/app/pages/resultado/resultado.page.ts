import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.route.navigate(['/tabs/home']);
  }

}
