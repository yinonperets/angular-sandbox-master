import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum'
})
export class RandomNumPipe implements PipeTransform {

public RandomNum(max:number){
  return Math.floor(Math.random() * max);
}

  transform(value: number, ...args: number[]): number {
 if (args == null)
return this.RandomNum();
 return 0;



}


