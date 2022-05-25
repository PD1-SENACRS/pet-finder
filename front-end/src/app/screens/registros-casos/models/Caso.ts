import { ICaso } from "./ICaso";

export class Caso implements ICaso {
      status: "Encontrado" | "Perdido" = "Perdido";
      data_caso: Date = new Date();
      tipo_animal: String = "";
      raca: String = " ";
      nome_animal: String = "";
      imagem: String = "";
      latitude: number = -30.050659;
      longitude: number = -51.179913; 
}