import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalStateComponent } from './verbal-state.component';

describe('VerbalStateComponent', () => {
  let component: VerbalStateComponent;
  let fixture: ComponentFixture<VerbalStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbalStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
