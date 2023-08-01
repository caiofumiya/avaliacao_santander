import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoUsuarioComponent } from './exibicao-usuario.component';

describe('ExibicaoUsuarioComponent', () => {
  let component: ExibicaoUsuarioComponent;
  let fixture: ComponentFixture<ExibicaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibicaoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
