import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum'
})
export class RandomNumPipe implements PipeTransform {


  transform(max: number, ...args: number[]): number {
 if (args == null)
return this.RandomNum();
 return 0;




 public RandomNum(max:number){
  return Math.floor(Math.random() * max);
}
}

}
