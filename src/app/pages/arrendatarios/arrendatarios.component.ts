import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Arrendatario } from '../../common/models/arrendatario/Arrendatario';
import { ResourceBaseService } from '../../base/resource-base.service';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Recibo } from '../../common/models/recibo/Recibo';
import { Contrato } from '../../common/models/contrato/Contrato';
import { ArrendarioService } from '../../services/Arrendatario.service';
import { ReciboService } from '../../services/Recibo.service';
import { baseUrl } from '../../app.config';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-arrendatarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrendatarios.component.html',
  styleUrl: './arrendatarios.component.scss'
})
export class ArrendatariosComponent extends BaseComponent<Arrendatario>   {

  arrendatarios : Observable< Arrendatario[] > = new Observable<Arrendatario[]>;

  constructor( private as: ArrendarioService , private rs: ReciboService ) {
    
    as.resourceName = 'Arrendatarios'
    rs.resourceName = "Recibos";

    super( as );
    this.arrendatarios = this.index();
  }
  

  async asPayedReceipt( selectedGuest: Arrendatario ){

    const newReceipt: Recibo = {  
      arrendadorId: 1, 
      arrendatarioId: selectedGuest.id, 
      propiedadId : selectedGuest.propiedadId , 
      identificador : "sadf"
    }

    const created = await this.rs.create(newReceipt);

    if(created != undefined){
      const url = `${baseUrl}${this.rs.resourceName}/Documento/${created.id}`;
      window.open( url , '_blank');
    }

  }

 
  
}
