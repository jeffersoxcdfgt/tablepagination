import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnChanges {

  @Input() loading : boolean | null = true;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
