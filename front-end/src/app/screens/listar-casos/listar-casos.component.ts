import { Component, OnInit } from '@angular/core';
import { Caso } from './Caso';
import { ListarCasoService } from './listar-casos.service';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-listar-casos',
  templateUrl: './listar-casos.component.html',
  styleUrls: ['./listar-casos.component.scss']
})
export class ListarCasosComponent implements OnInit {

  casosList: Caso[] = [];
  caso: Caso = new Caso();
  id_caso!: string;
  //actionButton = "Register";
  message = "";
  searchResult = "";

  constructor(private listarCasoService: ListarCasoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.listarCasos();
  }

  listarCasos(){
    this.listarCasoService.GetCasos().subscribe(data => {this.casosList = data});
  }
}
