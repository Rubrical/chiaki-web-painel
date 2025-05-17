import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenciaConsultaComponent } from './advertencia-consulta.component';

describe('AdvertenciaConsultaComponent', () => {
  let component: AdvertenciaConsultaComponent;
  let fixture: ComponentFixture<AdvertenciaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertenciaConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertenciaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
