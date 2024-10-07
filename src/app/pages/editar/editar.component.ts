import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { ProdutoListar } from '../../Models/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  btnAcao = "Editar";
  
  descTitulo = "Editar Produtos"

  produto!: ProdutoListar;

  constructor(private produtoService:ProdutoService, private router: Router, private route: ActivatedRoute
   ){}


   ngOnInit(){

    const id = Number (this.route.snapshot.paramMap.get('id'))

    this.produtoService.GetProdutoId(id).subscribe(response => {
        this.produto = response.dados;           
    });

   }

   editarProduto(produto:ProdutoListar){
    this.produtoService.EditarProduto(produto).subscribe(response => {
      this.router.navigate(["/"]);
    })

   }

}
