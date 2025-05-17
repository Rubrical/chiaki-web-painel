import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanConsultaComponent } from './ban-consulta.component';

describe('BanConsultaComponent', () => {
  let component: BanConsultaComponent;
  let fixture: ComponentFixture<BanConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
