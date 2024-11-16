import { Observable } from "rxjs";

export interface IResourceBaseService<T>{

    resourceName: string | undefined;

    create(toCreateITem: T): Promise<T | undefined>;

    edit(id: number): Promise<T | undefined>;

    index(): Observable<[T]>;

    delete(id:number):Promise<boolean>;

    details(id:number): Promise<T | undefined >;
}