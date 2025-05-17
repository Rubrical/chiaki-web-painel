import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenciaListaComponent } from './advertencia-lista.component';

describe('AdvertenciaListaComponent', () => {
  let component: AdvertenciaListaComponent;
  let fixture: ComponentFixture<AdvertenciaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertenciaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertenciaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
