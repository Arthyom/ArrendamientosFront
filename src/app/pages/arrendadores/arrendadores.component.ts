import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ResourceBaseService } from '../../base/resource-base.service';
import { Arrendador } from '../../common/models/arrendador/Arrendador';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arrendadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrendadores.component.html',
  styleUrl: './arrendadores.component.scss'
})
export class ArrendadoresComponent extends BaseComponent<Arrendador> {

  arrendadores = new Observable<Arrendador[]>;
  constructor( private rs: ResourceBaseService<Arrendador> ) {
    rs.resourceName = 'Arrendadores'
    super( rs );

    this.arrendadores = this.index();
  }

}
