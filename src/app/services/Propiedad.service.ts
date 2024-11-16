import { Injectable } from "@angular/core";
import { ResourceBaseService } from "../base/resource-base.service";
import { Fiador } from '../common/models/fiador/Fiador';
import { Propiedad } from '../common/models/propiedad/Propiedad';

@Injectable({
    providedIn: "root"
})
export class PropiedadService extends ResourceBaseService<Propiedad> {
    override resourceName = 'Propiedades';
}