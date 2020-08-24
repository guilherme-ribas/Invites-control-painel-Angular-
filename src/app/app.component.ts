import { AppService } from './app.service';
import { Indicacao } from './indicacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  indicacoes: any;

  constructor(
    private appService: AppService
  ){}

  ngOnInit(): void {
    this.appService.getIndicacoes().subscribe((indicacoes: any) => {
      // this.indicacoes = indicacoes
      console.log(indicacoes)
    })


  }

}
