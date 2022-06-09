import { ICaso } from "./ICaso";

export class Caso implements ICaso {

      id_caso: number = 0;
      status: "Encontrado" | "Perdido" = "Perdido";
      data_caso: Date = new Date();
      tipo_animal: string = "";
      raca: string = " ";
      nome_animal: string = "";
      imagem: string = "";
      latitude: number = -30.050659;
      longitude: number = -51.179913;
}

// { "id_caso": 3, "status": "Perdido", "data_caso": "2022-04-24", "tipo_animal": "Cachorro", "raca": "Pug", "nome_animal": "Tobi235", "imagem": "path/link/imagem", "latitude": 30.123455, "longitude": 29.654322, "data_criacao": "2022-06-02T00:44:13.728Z", "data_alteracao": "2022-06-02T00:44:13.728Z", "id_usuario": 2 }