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

  getAll(){
    return this.http.get(this.link).pipe(take(1));
  }

  save(indicacao: Indicacao){
    return this.http.post<Indicacao>(this.link, indicacao).pipe(take(1));
  }

  edit(id, indicacao: Indicacao){
    return this.http.put<Indicacao>(`${this.link}/${id}`, indicacao.indicacao).pipe(take(1));
  }

  delete(id){
    return this.http.delete(`${this.link}/${id}`).pipe(take(1));
  }


}
