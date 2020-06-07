import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarGastoPage } from './editar-gasto.page';

describe('EditarGastoPage', () => {
  let component: EditarGastoPage;
  let fixture: ComponentFixture<EditarGastoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarGastoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
