import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNum'
})
export class RandomNumPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
 if (args == null) return this.getRandomInt()

}

public getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}
