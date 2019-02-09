import { TestBed } from '@angular/core/testing';

import { WidgetContainerFactoryService } from './widget-container-factory.service';

describe('WidgetContainerFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetContainerFactoryService = TestBed.get(WidgetContainerFactoryService);
    expect(service).toBeTruthy();
  });
});
