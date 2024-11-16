import { BaseEntity } from "../baseEntity/BaseEntity";
import { Renovacion } from "../renovacion/renovacion";

export class Contrato extends BaseEntity{
    
    ArrendadorId ?: number;
    ArrendatarioId ?: number;
    PropiedadId ?: number;
    FiadorId ?: number;
    Termino ?: Date;
   
   
    Renovacion ?: Renovacion [];
}