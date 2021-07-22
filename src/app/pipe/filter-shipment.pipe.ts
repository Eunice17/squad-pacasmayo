import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterShipment'
})
export class FilterShipmentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
