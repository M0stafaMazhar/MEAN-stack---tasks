import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, x : string): string {
    value = value.replace("Lorem" , x);
    return value;
  }

}
