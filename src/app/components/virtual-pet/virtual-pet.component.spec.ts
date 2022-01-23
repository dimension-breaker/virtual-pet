import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualPetComponent } from './virtual-pet.component';


describe('VirtualPetComponent', () => {
  let component: VirtualPetComponent;
  let fixture: ComponentFixture<VirtualPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtualPetComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
