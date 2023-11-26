import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoAlmacenComponent } from './caso-almacen.component';

describe('CasoAlmacenComponent', () => {
  let component: CasoAlmacenComponent;
  let fixture: ComponentFixture<CasoAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasoAlmacenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasoAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
