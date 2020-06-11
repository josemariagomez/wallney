import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnadirGrupoPage } from './anadir-grupo.page';

describe('AnadirGrupoPage', () => {
  let component: AnadirGrupoPage;
  let fixture: ComponentFixture<AnadirGrupoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirGrupoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirGrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
