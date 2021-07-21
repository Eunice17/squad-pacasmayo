export interface TypeBulkI {
    id: string;
    name: string
}
export interface ProductI {
    id: string;
    name: string;
    weight: number;
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
    id: string,
    tipoCarga: string, 
    detalleProducto: Array<DetailProductI>,
    dataRecojo: string,
    dataDestino: string,
    inputOtro: DetailProductI
}
export interface DetailProductI{
    qty: number,
    name: string
}



