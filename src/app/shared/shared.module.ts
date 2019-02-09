import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorComponent } from './widget/types/color/color.component';
import { LetterComponent } from './widget/types/letter/letter.component';
import { NumberComponent } from './widget/types/number/number.component';
import { WidgetOptionsComponent } from './widget/widget-options/widget-options.component';

@NgModule({
  declarations: [WidgetOptionsComponent, ColorComponent, NumberComponent, LetterComponent],
  imports: [CommonModule],
  exports: [WidgetOptionsComponent],
  entryComponents: [NumberComponent, LetterComponent, ColorComponent]
})
export class SharedModule {}
