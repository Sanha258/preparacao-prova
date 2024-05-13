import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueMontadoraComponent } from './estoque-montadora.component';

describe('EstoqueMontadoraComponent', () => {
  let component: EstoqueMontadoraComponent;
  let fixture: ComponentFixture<EstoqueMontadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueMontadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstoqueMontadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
