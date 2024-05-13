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

  public carros: Carro[] =[];
  public seletor: CarroSeletor = new CarroSeletor;

  constructor (private carroService: CarrosService) {

  }

  ngOnInit(): void {
    this.consultarTodasCarros();

    this..consultarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar países' + erro)
      }
    );
  }

  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    )
  }

  limpar(){
    this.seletor = new VacinaSeletor();
  }

  private consultarTodasVacinas(){
    this.vacinaService.consultarTodas().subscribe(
      resultado => {
         this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    );
  }
}
