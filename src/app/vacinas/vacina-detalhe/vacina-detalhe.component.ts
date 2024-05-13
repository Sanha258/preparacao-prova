import { Vacina } from './../../shared/model/vacina';
import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../../shared/service/vacina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})

export class VacinaDetalheComponent implements OnInit{
  vacina!: Vacina;



  constructor(private vacinaService: VacinaService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  salvar(){
    this.vacinaService.salvar(this.vacina).subscribe(
      resultado => {
        Swal.fire("Vacina Salva com Sucesso!", "", "success");
      },
      erro => {
        Swal.fire("Erro ao Salvar Vacina", erro, "error");
      }
    );
  }

}
