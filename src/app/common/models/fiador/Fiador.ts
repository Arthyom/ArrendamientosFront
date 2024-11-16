import { BaseEntity } from "../baseEntity/BaseEntity";

export class Fiador extends BaseEntity {
    Nombre ?: string;
     ApellidoPaterno ?: string;
     ApellidoMaterno ?: string; 
     Curp ?: string;
     Rfc ?: string;
     Alias ?: string;
   
     Direccion ?: string;    
     Municipio ?: string;
     Colonia ?: string;
}