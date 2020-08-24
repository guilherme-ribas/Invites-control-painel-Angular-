import { AppService } from './app.service';
import { Indicacao } from './indicacao';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  indicacoes: Indicacao[];
  display: boolean = false;
  generos = [
    {label: 'Masculino', value: 'Masculino'},
    {label: 'Feminino', value: 'Feminino'},
    {label: 'Outro', value: 'Outro'}
  ];
  form: FormGroup;
  indicacaoSelecionada: Indicacao;

  constructor(
    private service: AppService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: null,
      email: null,
      telefone: null,
      dataNascimento: null,
      genero: null
    })
    this.service.getAll().subscribe((indicacoes: any) => {
      this.indicacoes = Object.keys(indicacoes).map(obj => {
        return {id: obj, indicacao: indicacoes[obj]}
      });
    });
  }

  abrirDetalhe(i: Indicacao){
    this.display = true;
    this.indicacaoSelecionada = i;
    this.form.patchValue({
      nome: i.indicacao.nome,
      email: i.indicacao.email,
      telefone: i.indicacao.telefone,
      dataNascimento: i.indicacao.dataNascimento,
      genero: i.indicacao.genero
    })
  }

  clearForm(){
    this.form.reset();
  }

  onSubmit(){
    console.log(this.form.value)
    this.service.edit(this.indicacaoSelecionada.id, this.form.value).subscribe(r => console.log(r));
  }

  onDelete(id){
    this.service.delete(id).subscribe(r => console.log(r));
  }

}
