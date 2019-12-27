import { Pipe, PipeTransform } from '@angular/core';

/*
this pipe allows only a certain amount of an expert's skills to be explicitly displayed on a response
*/

@Pipe({
  name: 'skilltag'
})
export class SkilltagPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const tags = [];

    for (let i = 0; i <= 3; i++) {
      tags.push(value[i]);
    }

    return tags;
  }
}
