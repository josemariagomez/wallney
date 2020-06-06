import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastosModalPage } from './gastos-modal.page';

describe('GastosModalPage', () => {
  let component: GastosModalPage;
  let fixture: ComponentFixture<GastosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
