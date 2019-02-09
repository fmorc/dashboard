import { Component, OnInit } from '@angular/core';
import { WidgetOption } from '../../widget-options/widget-option.model';
import { Widget } from '../Widget';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit, Widget {
  type: WidgetOption;
  letter: string;
  private readonly letters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.getRandomLetter());
    this.letter = this.getRandomLetter();
  }

  private getRandomLetter(): string {
    const limit = this.letters.length - 1;
    const randomNumber = Math.floor(Math.random() * limit);
    return this.letters[randomNumber];
  }
}
