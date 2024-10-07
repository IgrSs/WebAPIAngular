import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { ProdutoListar } from '../../Models/Produto';
import { ProdutoService } from '../../services/produto.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  descTitulo = "Cadastrar Produtos"

  constructor(private produtoService : ProdutoService, private router : Router){}

  criarProduto(produto : ProdutoListar){
    this.produtoService.criarProduto(produto).subscribe(response => {
      this.router.navigate(["/"])
    })
  }
}
