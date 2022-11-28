import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUbicacionComponent } from './save_ubicacion.component';

describe('SaveUbicacionComponent', () => {
  let component: SaveUbicacionComponent;
  let fixture: ComponentFixture<SaveUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUbicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
