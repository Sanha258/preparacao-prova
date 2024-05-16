import { CarroSeletor } from './../../../shared/model/seletor/carro.seletor';
import { CarrosService } from './../../../shared/service/carros.service';
import { Carro } from './../../../shared/model/carro';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listagem-carros',
  //standalone: true,
  //imports: [],
  templateUrl: './listagem-carros.component.html',
  styleUrl: './listagem-carros.component.scss'
})

export class ListagemCarrosComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


