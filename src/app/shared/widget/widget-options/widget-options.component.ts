import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetTypeFactoryService } from '../widget-type-factory.service';
import { WidgetOption } from './widget-option.model';
import { WidgetOptions } from './widget-options.constant';

@Component({
  selector: 'app-widget-options',
  templateUrl: './widget-options.component.html',
  styleUrls: ['./widget-options.component.scss']
})
export class WidgetOptionsComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;
  widgetOptions = JSON.parse(JSON.stringify(WidgetOptions));
  constructor(private widgetTypeFactoryService: WidgetTypeFactoryService) {}

  ngOnInit() {}

  createWidget(widget: WidgetOption) {
    this.widgetTypeFactoryService.setRootViewContainerRef(this.viewContainerRef);
    this.widgetTypeFactoryService.addWidget(widget);
  }
}
