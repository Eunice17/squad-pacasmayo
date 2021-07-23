export interface DepartamentoI {
    id: string;
    name: string
}

export interface ProvinciaI{
    id:string,
    name:string,
    originid:string
}

export interface DistritoI{
    id:string,
    name:string,
    province_id:string,
    originid:string
}
