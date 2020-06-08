import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarIngresoPage } from './editar-ingreso.page';

describe('EditarIngresoPage', () => {
  let component: EditarIngresoPage;
  let fixture: ComponentFixture<EditarIngresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarIngresoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarIngresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
