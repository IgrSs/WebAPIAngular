import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { response } from 'express';
import { ProdutoListar } from '../../Models/Produto';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  produto!: ProdutoListar;
  

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'))
    this.produtoService.GetProdutoId(id).subscribe( response => {
      this.produto = response.dados;
    })
  }

}
