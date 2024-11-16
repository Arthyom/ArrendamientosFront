import { Injectable } from "@angular/core";
import { ResourceBaseService } from "../base/resource-base.service";
import { Contrato } from "../common/models/contrato/Contrato";

@Injectable({
    providedIn: "root"
})
export class ContratoService extends ResourceBaseService<Contrato> {
    override resourceName = 'Contratos';
}