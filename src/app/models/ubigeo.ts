export interface DepartamentoI {
    id: string;
    name: string
}

export interface ProvinciaI{
    id:string,
    name:string,
    department_id:string
}

export interface DistritoI{
    id:string,
    name:string,
    province_id:string,
    department_id:string
}
