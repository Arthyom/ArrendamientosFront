import { BaseEntity } from "../baseEntity/BaseEntity";
import { TypePropertyEnum } from "../enums/TypeProperty.enum";

export class Propiedad extends BaseEntity{
    
 alias ?: string;

 nombre ?: string;

 precio ?: number;

 typeProperty ?: TypePropertyEnum;

 libre ?: boolean;

 direccion ?: string;

 municipio ?: string;

 colonia ?: string;
}