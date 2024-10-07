import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutoListar } from '../../Models/Produto';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  @Input() btnAcao!: string;

  @Input() descTitulo!: string;

  @Input() dadosProdutos : ProdutoListar | null = null

  @Output() onSubmit = new EventEmitter<ProdutoListar>();

  produtoForm! : FormGroup;


  ngOnInit(): void {
    
    this.produtoForm = new FormGroup({
      id: new FormControl(this.dadosProdutos ? this.dadosProdutos.id : 0),
      descricao: new FormControl(this.dadosProdutos ? this.dadosProdutos.descricao : ''),
      preco: new FormControl(this.dadosProdutos ? this.dadosProdutos.preco : 0),
      dataValidade: new FormControl(new Date().toISOString().substring(0, 10)),
      situacao: new FormControl(this.dadosProdutos ? this.dadosProdutos.situacao : true)
    });
  }

  submit() {
    this.onSubmit.emit(this.produtoForm.value);
  }
}
