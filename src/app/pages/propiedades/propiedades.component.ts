import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Propiedad } from '../../common/models/propiedad/Propiedad';
import { ResourceBaseService } from '../../base/resource-base.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.scss'
})
export class PropiedadesComponent extends BaseComponent<Propiedad> {

  propiedades : Observable<Propiedad[]> = new  Observable<Propiedad[]>

  constructor( private rs: ResourceBaseService<Propiedad> ) {
    rs.resourceName = 'Propiedades'
    super( rs );

    this.propiedades = this.index();
  }

}
