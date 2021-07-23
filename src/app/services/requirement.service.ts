import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { OriginI, DestinationI, ProductI, TypeBulkI, RequirementI } from '../models/dinoex';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  
  orders: RequirementI[] = []
  private cart = new BehaviorSubject<Array<RequirementI>>([]);
  cart$ = this.cart.asObservable();
  publishOrder(order: RequirementI) {
    this.orders = [...this.orders, order]
    this.cart.next(this.orders)
  }

  id: string = ''
  private box = new BehaviorSubject<string>('');
  box$ = this.box.asObservable();
  sendId(id: string) {
    this.id = id;
    this.box.next(this.id);
  }

  constructor(private firestore: AngularFirestore) { }

  getTypeBulk(): TypeBulkI[] {
    return this.typeBulk;
  }
  public getBulk(): Observable<any> {
    return this.firestore.collection('product').snapshotChanges();
  }
  getOrigin(): OriginI[] {
    return this.origin;
  }
  getDestiny(): DestinationI[] {
    return this.destination;
  }
  createRequirement(data: any) {
    return this.firestore.collection('requirement').add(data);
  }

  getRequirementId(id: string){
    return this.firestore.collection('requirement').doc(id).snapshotChanges();
  }

  getRequirement() {
    return this.firestore.collection('requirement').snapshotChanges();
  }
  
  public requirementUpdate(id: string, prueba: any) {
    return this.firestore.collection('requirement').doc(id).update(prueba);
  }
  private typeBulk: TypeBulkI[] = [
    { id: 'TC01',name: 'Carga seca'},
    { id: 'TC02', name: 'Carga refrigerada'},
    { id: 'TC03',name: 'Carga húmeda'},
    { id: 'TC04',name: 'Carga de agregados'}
  ]
  private origin: OriginI[] = [
    { id: 'P01',name: 'DinoEX-Piura'},
    { id: 'P02',name: 'DinoEX-Chiclayo'},
    { id: 'P03',name: 'DinoEX-Trujillo'},
    { id: "01", name: "Amazonas" },
    { id: "02", name: "Áncash" },
    { id: "03", name: "Apurímac" },
    { id: "04", name: "Arequipa" },
    { id: "05", name: "Ayacucho" },
    { id: "06", name: "Cajamarca" },
    { id: "07", name: "Callao" },
    { id: "08", name: "Cusco" },
    { id: "09", name: "Huancavelica" },
    { id: "10", name: "Huánuco" },
    { id: "11", name: "Ica" },
    { id: "12", name: "Junín" },
    { id: "13", name: "La Libertad" },
    { id: "14", name: "Lambayeque" },
    { id: "15", name: "Lima" },
    { id: "16", name: "Loreto" },
    { id: "17", name: "Madre de Dios" },
    { id: "18", name: "Moquegua" },
    { id: "19", name: "Pasco" },
    { id: "20", name: "Piura" },
    { id: "21", name: "Puno" },
    { id: "22", name: "San Martín" },
    { id: "23", name: "Tacna" },
    { id: "24", name: "Tumbes" },
    { id: "25", name: "Ucayali" }
  ]
  private destination: DestinationI[] = [
  { id: 'D01', name: 'Piura', originId: 'P01'},
  { id: 'D02', name: 'Sullana',originId: 'P01'},
  { id: 'D03', name: 'Chiclayo', originId: 'P02'},
  { id: 'D04', name: 'Ferreñafe', originId: 'P02',},
  { id: 'D05', name: 'Trujillo', originId: 'P03',},
  { id: "0101", name: "Chachapoyas", originId: "01" },
  { id: "0102", name: "Bagua", originId: "01" },
  { id: "0103", name: "Bongarí", originId: "01" },
  { id: "0104", name: "Condorcanqui",originId: "01" },
  { id: "0105", name: "Luya", originId: "01" },
  { id: "0106", name: "Rodríguez de Mendoza", originId: "01" },
  { id: "0107", name: "Utcubamba", originId: "01" },
  { id: "0201", name: "Huaraz", originId: "02" },
  { id: "0202", name: "Aija", originId: "02" },
  { id: "0203", name: "Antonio Raymondi", originId: "02" },
  { id: "0205", name: "Bolognesi", originId: "02" },
  { id: "0206", name: "Carhuaz", originId: "02" },
  { id: "0208", name: "Casma", originId: "02" },
  { id: "0209", name: "Corongo", originId: "02" },
  { id: "0210", name: "Huari", originId: "02" },
  { id: "0211", name: "Huarmey", originId: "02" },
  { id: "0212", name: "Huaylas", originId: "02" },
  { id: "0213", name: "Mariscal Luzuriaga", originId: "02" },
  { id: "0214", name: "Ocros", originId: "02" },
  { id: "0215", name: "Pallasca", originId: "02" },
  { id: "0216", name: "Pomabamba", originId: "02" },
  { id: "0217", name: "Recuay", originId: "02" },
  { id: "0218", name: "Santa", originId: "02" },
  { id: "0219", name: "Sihuas", originId: "02" },
  { id: "0220", name: "Yungay", originId: "02" },
  { id: "0301", name: "Abancay", originId: "03" },
  { id: "0302", name: "Andahuaylas",originId: "03" },
  { id: "0303", name: "Antabamba", originId: "03" },
  { id: "0304", name: "Aymaraes", originId: "03" },
  { id: "0305", name: "Cotabambas", originId: "03" },
  { id: "0306", name: "Chincheros", originId: "03" },
  { id: "0307", name: "Grau", originId: "03" },
  { id: "0401", name: "Arequipa", originId: "04" },
  { id: "0404", name: "Castilla", originId: "04" },
  { id: "0405", name: "Caylloma", originId: "04" },
  { id: "0406", name: "Condesuyos", originId: "04" },
  { id: "0407", name: "Islay", originId: "04" },
  { id: "0501", name: "Huamanga", originId: "05" },
  { id: "0502", name: "Cangallo", originId: "05" },
  { id: "0503", name: "Huanca Sancos", originId: "05" },
  { id: "0504", name: "Huanta", originId: "05" },
  { id: "0505", name: "La Mar", originId: "05" },
  { id: "0506", name: "Lucanas", originId: "05" },
  { id: "0507", name: "Parinacochas", originId: "05" },
  { id: "0509", name: "Sucre", originId: "05" },
  { id: "0601", name: "Cajamarca", originId: "06" },
  { id: "0602", name: "Cajabamba", originId: "06" },
  { id: "0604", name: "Chota", originId: "06" },
  { id: "0606", name: "Cutervo", originId: "06" },
  { id: "0607", name: "Hualgayoc", originId: "06" },
  { id: "0608", name: "Jaén", originId: "06" },
  { id: "0609", name: "San Ignacio", originId: "06" },
  { id: "0610", name: "San Marcos", originId: "06" },
  { id: "0611", name: "San Miguel", originId: "06" },
  { id: "0612", name: "San Pablo", originId: "06" },
  { id: "0613", name: "Santa Cruz", originId: "06" },
  { id: "0701", name: "Prov. Const. del Callao", originId: "07" },
  { id: "0801", name: "Cusco", originId: "08" },
  { id: "0802", name: "Acomayo", originId: "08" },
  { id: "0803", name: "Anta", originId: "08" },
  { id: "0804", name: "Calca", originId: "08" },
  { id: "0805", name: "Canas", originId: "08" },
  { id: "0806", name: "Canchis", originId: "08" },
  { id: "0807", name: "Chumbivilcas", originId: "08" },
  { id: "0808", name: "Espinar", originId: "08" },
  { id: "0810", name: "Paruro", originId: "08" },
  { id: "0811", name: "Paucartambo", originId: "08" },
  { id: "0812", name: "Quispicanchi", originId: "08" },
  { id: "0813", name: "Urubamba", originId: "08" },
  { id: "0901", name: "Huancavelica",originId: "09" },
  { id: "0902", name: "Acobamba", originId: "09" },
  { id: "0903", name: "Angaraes", originId: "09" },
  { id: "0904", name: "Castrovirreyna", originId: "09" },
  { id: "0905", name: "Churcampa", originId: "09" },
  { id: "0907", name: "Tayacaja", originId: "09" },
  { id: "1001", name: "Huánuco", originId: "10" },
  { id: "1002", name: "Ambo", originId: "10" },
  { id: "1003", name: "Dos de Mayo", originId: "10" },
  { id: "1004", name: "Huacaybamba", originId: "10" },
  { id: "1006", name: "Leoncio Prado", originId: "10" },
  { id: "1008", name: "Pachitea", originId: "10" },
  { id: "1009", name: "Puerto Inca", originId: "10" },
  { id: "1010", name: "Lauricocha ", originId: "10" },
  { id: "1011", name: "Yarowilca ", originId: "10" },
  { id: "1101", name: "Ica ", originId: "11" },
  { id: "1102", name: "Chincha ", originId: "11" },
  { id: "1103", name: "Nasca ", originId: "11" },
  { id: "1104", name: "Palpa ", originId: "11" },
  { id: "1105", name: "Pisco ", originId:"11" },
  { id: "1201", name: "Huancayo ", originId: "12" },
  { id: "1202", name: "Concepción ", originId: "12" },
  { id: "1203", name: "Chanchamayo ", originId: "12" },
  { id: "1204", name: "Jauja ", originId:"12" },
  { id: "1205", name: "Junín ", originId: "12" },
  { id: "1206", name: "Satipo ", originId: "12" },
  { id: "1207", name: "Tarma ", originId: "12" },
  { id: "1208", name: "Yauli ", originId: "12" },
  { id: "1209", name: "Chupaca ", originId: "12" },
  { id: "1301", name: "Trujillo ", originId: "13" },
  { id: "1302", name: "Ascope ",originId: "13" },
  { id: "1306", name: "Otuzco ", originId: "13" },
  { id: "1307", name: "Pacasmayo ", originId: "13" },
  { id: "1308", name: "Pataz ", originId: "13" },
  { id: "1310", name: "Santiago de Chuco ", originId: "13" },
  { id: "1312", name: "Virú ", originId: "13" },
  { id: "1401", name: "Chiclayo ", originId: "14" },
  { id: "1402", name: "Ferreñafe ", originId: "14" },
  { id: "1403", name: "Lambayeque ", originId: "14" },
  { id: "1501", name: "Lima ", originId: "15" },
  { id: "1502", name: "Barranca ", originId: "15" },
  { id: "1503", name: "Cajatambo ", originId: "15" },
  { id: "1504", name: "Canta ", originId:"15" },
  { id: "1506", name: "Huaral ", originId: "15" },
  { id: "1508", name: "Huaura ", originId: "15" },
  { id: "1510", name: "Yauyos ", originId: "15" },
  { id: "1601", name: "Maynas ", originId:"16" },
  { id: "1602", name: "Alto Amazonas ", originId: "16" },
  { id: "1603", name: "Loreto ", originId: "16" },
  { id: "1605", name: "Requena ", originId: "16" },
  { id: "1606", name: "Ucayali ", originId: "16" },
  { id: "1608", name: "Putumayo", originId: "16" },
  { id: "1701", name: "Tambopata ", originId: "17" },
  { id: "1702", name: "Manu ", originId: "17" },
  { id: "1703", name: "Tahuamanu ", originId: "17" },
  { id: "1801", name: "Mariscal Nieto ", originId: "18" },
  { id: "1802", name: "General Sánchez Cerro ",originId: "18"},
  { id: "1803", name: "Ilo ", originId: "18" },
  { id: "1901", name: "Pasco ", originId: "19" },
  { id: "1902", name: "Daniel Alcides Carrión ",originId: "19"},
  { id: "1903", name: "Oxapampa ", originId: "19" },
  { id: "2001", name: "Piura ", originId: "20" },
  { id: "2002", name: "Ayabaca ", originId: "20" },
  { id: "2003", name: "Huancabamba ", originId: "20" },
  { id: "2004", name: "Morropón ", originId: "20" },
  { id: "2005", name: "Paita ", originId: "20" },
  { id: "2006", name: "Sullana ", originId: "20" },
  { id: "2007", name: "Talara ", originId: "20" },
  { id: "2008", name: "Sechura ", originId: "20" },
  { id: "2101", name: "Puno ", originId: "21" },
  { id: "2102", name: "Azángaro ", originId: "21" },
  { id: "2103", name: "Carabaya ", originId: "21" },
  { id: "2104", name: "Chucuito ", originId: "21" },
  { id: "2105", name: "El Collao ", originId: "21" },
  { id: "2106", name: "Huancaní ", originId: "21" },
  { id: "2107", name: "Lampa ", originId: "21" },
  { id: "2108", name: "Melgar ", originId: "21" },
  { id: "2109", name: "Moho ", originId: "21" },
  { id: "2110", name: "San Antonio de Putina ", originId: "21" },
  { id: "2111", name: "San Romón ", originId: "21" },
  { id: "2112", name: "Sandia ", originId: "21" },
  { id: "2113", name: "Yunguyo ", originId: "21" },
  { id: "2201", name: "Moyobamba ", originId: "22" },
  { id: "2202", name: "Bellavista ", originId: "22" },
  { id: "2203", name: "El Dorado ", originId: "22" },
  { id: "2204", name: "Huallaga ", originId: "22" },
  { id: "2205", name: "Lamas ", originId: "22" },
  { id: "2206", name: "Mariscal Cáceres ", originId: "22" },
  { id: "2207", name: "Picota ", originId: "22" },
  { id: "2208", name: "Rioja ", originId: "22" },
  { id: "2209", name: "San Martín ", originId: "22" },
  { id: "2210", name: "Tocache ", originId: "22" },
  { id: "2301", name: "Tacna ", originId: "23" },
  { id: "2302", name: "Candarave ", originId: "23" },
  { id: "2303", name: "Jorge Basadre ",originId: "23" },
  { id: "2304", name: "Tarata ", originId: "23" },
  { id: "2401", name: "Tumbes ", originId: "24" },
  { id: "2402", name: "Contralmirante Villar ", originId: "24" },
  { id: "2403", name: "Zarumilla ", originId: "24" },
  { id: "2501", name: "Coronel Portillo ", originId: "25" },
  { id: "2502", name: "Atalaya ", originId: "25" },
  { id: "2503", name: "Padre Abad ", originId: "25" }
  ]
}
