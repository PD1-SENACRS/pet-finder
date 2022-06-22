export class Caso {
    _id_caso!: number;
    status: string = "Perdido";
    data_caso: string = "";
    tipo_animal: string = "";
    raca: string = "";
    nome_animal: string = "";
    imagem: string = "";
    latitude: number = 0;
    longitude: number = 0;
    data_criacao: string = "";
    data_alteracao: string = "";
    id_usuario!: number;
}