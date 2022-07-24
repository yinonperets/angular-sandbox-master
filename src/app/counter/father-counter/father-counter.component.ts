import { Component } from '@angular/core';

@Component({
  selector: 'father-counter',
  templateUrl: './father-counter.component.html',
  styles: [
  ]
})
export class FatherCounterComponent  {
counter:number = 0;
setCounter(num:number){
  this.counter = num;

}
log(){
  console.log("ben is homo baaasa");
}
}
