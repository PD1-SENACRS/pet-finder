export interface ICaso {

      id_caso: number
      status: "Encontrado" | "Perdido",
      data_caso: Date,
      tipo_animal: string,
      raca: string,
      nome_animal: string,
      imagem: string,
      latitude: any,
      longitude: any
      position: any


}