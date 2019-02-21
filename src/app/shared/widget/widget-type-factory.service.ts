import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { ColorComponent } from './types/color/color.component';
import { LetterComponent } from './types/letter/letter.component';
import { NumberComponent } from './types/number/number.component';
import { WidgetOption } from './widget-options/widget-option.model';

@Injectable({
  providedIn: 'root'
})
export class WidgetTypeFactoryService {
  rootViewContainer: ViewContainerRef;

  widgets: ComponentRef<WidgetOption>[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addWidget(widgetOption: WidgetOption) {
    const widgetComponentType = this.getWidgetComponent(widgetOption);
    const factory = this.componentFactoryResolver.resolveComponentFactory(widgetComponentType);
    const component = factory.create(this.rootViewContainer.parentInjector);
    component.instance.type = widgetOption.type;

    this.widgets.push(component);
    this.rootViewContainer.insert(component.hostView);
  }

  private getWidgetComponent(widgetOption: WidgetOption): Type<NumberComponent | ColorComponent | LetterComponent> {
    switch (widgetOption.type) {
      case 'NUMBER':
        return NumberComponent;
      case 'LETTER':
        return LetterComponent;
      case 'COLOR':
        return ColorComponent;
      default:
        throw new Error(`the type ${widgetOption.type} does not exist`);
    }
  }
}
