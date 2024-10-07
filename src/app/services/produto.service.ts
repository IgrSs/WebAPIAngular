import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { ProdutoListar } from '../Models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }


  GetProdutos(): Observable<Response<ProdutoListar[]>>{
    return this.http.get<Response<ProdutoListar[]>>(this.ApiUrl);
  }

  DeletarProduto(id:number | undefined) : Observable<Response<ProdutoListar[]>> {
    return this.http.delete<Response<ProdutoListar[]>>(`${this.ApiUrl}?Id=${id}`);
  }

  criarProduto(produto : ProdutoListar) : Observable<Response<ProdutoListar[]>>{
    return this.http.post<Response<ProdutoListar[]>>(this.ApiUrl, produto);
  }

  GetProdutoId(id:number):Observable<Response<ProdutoListar>>{
    return this.http.get<Response<ProdutoListar>>(`${this.ApiUrl}/${id}`);
  }

  EditarProduto(produto:ProdutoListar):Observable<Response<ProdutoListar[]>>{
    return this.http.put<Response<ProdutoListar[]>>(this.ApiUrl, produto);
  }
}
