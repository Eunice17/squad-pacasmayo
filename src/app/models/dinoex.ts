export interface TypeBulkI {
    id: string;
    name: string
}
export interface ProductI {
    id: string;
    name: string;
    weight: number;
    qty:number;
    weightTotal:number;
    measure: string
}
export interface OriginI {
    id: string;
    name: string;
}
export interface DestinationI {
    id: string;
    originId: string;
    name: string;
}
export interface RequirementI {
    tipoCarga: string, 
    itemSeleccionado: Array<DetailProductI>,
    dataRecojo: OriginI,
    dataDestino: DestinationI,
    direccion: string,
    nombre: string,
    celular: number,
    horaDespacho: string,
    montoTotal: number,
}
export interface DetailProductI{
    qty: number,
    name: string
}



