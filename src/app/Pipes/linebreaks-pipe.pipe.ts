import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linebreaksPipe'
})
export class LinebreaksPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\\n/g, '<br />');
  }

}
