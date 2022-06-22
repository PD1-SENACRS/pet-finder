import { Component, OnInit } from '@angular/core';
import { Caso } from './Caso';
import { CasoService } from './perda_form.service';



@Component({
  selector: 'app-perda-form',
  templateUrl: './perda-form.component.html',
  styleUrls: ['./perda-form.component.scss'],
})
export class PerdaFormComponent implements OnInit {

  caso: Caso = new Caso();
  message = "";
  actionButton = "Register";
  constructor(private casoService: CasoService) { }

  ngOnInit(): void {}
  save(){
    this.casoService.Insert(this.caso).subscribe(caso => {this.caso = caso;
    this.message = `${caso.nome_animal} registered!`;
    this.caso = new Caso();
    })
  }
}
