import { Montadora } from "./montadora";

export interface Carro {
  id: number;
  modelo: string;
  placa: string;
  montadora: Montadora;
  ano: Date;
  valor: number;
}
