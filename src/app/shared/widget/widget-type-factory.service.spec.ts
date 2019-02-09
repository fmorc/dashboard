import { TestBed } from '@angular/core/testing';

import { WidgetTypeFactoryService } from './widget-type-factory.service';

describe('WidgetTypeFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetTypeFactoryService = TestBed.get(WidgetTypeFactoryService);
    expect(service).toBeTruthy();
  });
});
