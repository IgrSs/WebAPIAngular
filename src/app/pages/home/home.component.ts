import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoListar } from '../../Models/Produto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  produtos: ProdutoListar[] = [];
  produtosGeral: ProdutoListar[] = [];

  constructor(private serviceProduto:ProdutoService){}



  ngOnInit(): void {
    
    this.serviceProduto.GetProdutos().subscribe(response => {
      this.produtos = response.dados;
      this.produtosGeral = response.dados;
    })
  }

  search(event:Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.produtos = this.produtosGeral.filter(produto => {
       return produto.descricao.toLowerCase().includes(value);
    })
}

  deletar(id:number | undefined){
    this.serviceProduto.DeletarProduto(id).subscribe(response => {
      window.location.reload()
  })
}


}
