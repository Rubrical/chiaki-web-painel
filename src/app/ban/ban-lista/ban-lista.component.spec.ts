import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanListaComponent } from './ban-lista.component';

describe('BanListaComponent', () => {
  let component: BanListaComponent;
  let fixture: ComponentFixture<BanListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
