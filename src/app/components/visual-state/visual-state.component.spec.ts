import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualStateComponent } from './visual-state.component';

describe('VisualStateComponent', () => {
  let component: VisualStateComponent;
  let fixture: ComponentFixture<VisualStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
