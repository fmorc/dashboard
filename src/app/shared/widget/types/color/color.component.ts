import { Component, OnInit } from '@angular/core';
import { WidgetOption } from '../../widget-options/widget-option.model';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit, WidgetOption {
  id: number;
  title: string;
  type: string;
  color: string;
  private readonly colors: string[] = ['#6753FF', '#FF4B4B', '#1E74FF', '#509b0d', '#FF9C2A', '#FEFF49'];

  constructor() {}

  ngOnInit() {
    this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    const limit = this.colors.length - 1;
    const randomNumber = Math.floor(Math.random() * limit);
    return this.colors[randomNumber];
  }
}
