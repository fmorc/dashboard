import { Component, OnInit } from '@angular/core';
import { WidgetOption } from '../../widget-options/widget-option.model';
import { Widget } from '../Widget';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit, Widget {
  type: WidgetOption;
  numberToDisplay: number;
  private readonly numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit() {
    console.log(this.getRandomNumber());
    this.numberToDisplay = this.getRandomNumber();
  }

  private getRandomNumber(): number {
    const limit = this.numbers.length - 1;
    const randomNumber = Math.floor(Math.random() * limit);
    return this.numbers[randomNumber];
  }
}
