import { Pipe, PipeTransform } from '@angular/core';
import { Tag } from 'src/app/models/Tag';

/*
this pipe allows only a certain amount of an expert's skills to be explicitly displayed on a response
*/

@Pipe({
  name: 'skilltag'
})
export class SkilltagPipe implements PipeTransform {

  transform(value: Tag[]): Tag[] {
    const tags = [];

    for (let i = 0; i <= 3 && i < value.length; i++) {
      tags.push(value[i]);
    }

    return tags;
  }
}
