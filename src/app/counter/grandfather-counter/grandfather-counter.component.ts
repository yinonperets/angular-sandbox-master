import { Component } from '@angular/core';

@Component({
  selector: 'grandfather-counter',
  templateUrl: './grandfather-counter.component.html',
  styles: [
  ]
})
export class GrandfatherCounterComponent {
counter: number = 0;
setCounter(nums:number){
  this.counter = nums;

}


}
