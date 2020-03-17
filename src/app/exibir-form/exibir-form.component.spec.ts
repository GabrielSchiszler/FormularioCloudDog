import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirFormComponent } from './exibir-form.component';

describe('ExibirFormComponent', () => {
  let component: ExibirFormComponent;
  let fixture: ComponentFixture<ExibirFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
