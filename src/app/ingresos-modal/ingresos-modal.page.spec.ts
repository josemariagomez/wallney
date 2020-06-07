import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresosModalPage } from './ingresos-modal.page';

describe('IngresosModalPage', () => {
  let component: IngresosModalPage;
  let fixture: ComponentFixture<IngresosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
