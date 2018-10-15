import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Object[], key: string): Object[] {
    if (!key) {return value}
    let ans: Object[] = [];
    value.forEach(post => {
      if ( post["author"].indexOf(key)>-1  || post["content"].indexOf(key)>-1 ){
      ans.push(post);
      }
    });
    return ans;
  }

}
