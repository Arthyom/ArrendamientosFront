import { Injectable } from "@angular/core";
import { ResourceBaseService } from "../base/resource-base.service";
import { Fiador } from '../common/models/fiador/Fiador';

@Injectable({
    providedIn: "root"
})
export class FiadorService extends ResourceBaseService<Fiador> {
    override resourceName = 'Fiadores';
}