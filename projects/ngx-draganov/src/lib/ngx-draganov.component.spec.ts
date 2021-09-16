import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDraganovComponent } from './ngx-draganov.component';

describe('NgxDraganovComponent', () => {
  let component: NgxDraganovComponent;
  let fixture: ComponentFixture<NgxDraganovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDraganovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDraganovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
