import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicacao } from './indicacao';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  link: string = environment.storage;

  constructor(
    protected http: HttpClient
  ) {
  }

  getIndicacoes(){
    return this.http.get(this.link).pipe(take(1));
  }

  saveIndicacao(indicacao: Indicacao){
    return this.http.post<Indicacao>(this.link, indicacao).pipe(take(1));
  }


}
