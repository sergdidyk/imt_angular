import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatResult'
})
export class FormatResultPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('pipe', typeof value, value, args)
    return value === undefined ? 
                    '' : 
                    `${args[0]} ${args[2]} ${args[1]} = ${value}`;
  }

}
