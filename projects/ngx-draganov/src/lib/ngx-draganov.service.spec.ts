import { TestBed } from '@angular/core/testing';

import { NgxDraganovService } from './ngx-draganov.service';

describe('NgxDraganovService', () => {
  let service: NgxDraganovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDraganovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
