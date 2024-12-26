import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesEditComponent } from './propiedades.edit.component';

describe('PropiedadesEditComponent', () => {
  let component: PropiedadesEditComponent;
  let fixture: ComponentFixture<PropiedadesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
