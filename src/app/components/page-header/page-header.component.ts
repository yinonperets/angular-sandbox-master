import { Component } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent   {
 title : string = "main title";
 secondary : string = "secondary title";

}
