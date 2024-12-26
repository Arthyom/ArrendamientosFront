import { Observable } from "rxjs";

export interface IBaseComponent<T>{


    create(toCreateITem: T): Promise< T | undefined >;

    edit(id: number, toEdit: T): Promise< T | undefined >;

    index():Observable< [T] >;

    delete(id:number):Promise<boolean>;

    details(id:number):Promise< T | undefined >;
}