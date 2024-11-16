import { Component, OnInit } from "@angular/core";
import { BaseEntity } from "../common/models/baseEntity/BaseEntity";
import { IBaseComponent } from "./IBase.component";
import { ResourceBaseService } from "./resource-base.service";
import { Observable } from 'rxjs';

export class BaseComponent<T extends BaseEntity> implements IBaseComponent<T> {

    /**
     *
     */

    constructor( private resourceBase: ResourceBaseService<T> ) {   
    }



    create(toCreateITem: T): Promise< T | undefined > {
        return this.resourceBase.create(toCreateITem);

    }

    edit(id: number): Promise< T | undefined >{
        return this.resourceBase.edit(id);
    }

    index(): Observable< [T] > {
       return this.resourceBase.index();
    }

    delete(id: number): Promise< boolean > {
       return this.resourceBase.delete(id);

    }

    details(id: number): Promise< T | undefined > {
       return this.resourceBase.details(id);
    }

    
}