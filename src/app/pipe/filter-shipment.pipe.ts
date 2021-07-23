import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterShipment'
})
export class FilterShipmentPipe implements PipeTransform {
  transform(value: Array<any>, args: string): Array<any> {
    if (args == 'All' || args == '') {
      return value;
    } else {
      return value.filter(omg => omg.data.dataDestino == args)
    }
  }

}
