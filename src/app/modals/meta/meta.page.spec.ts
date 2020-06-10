import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaPage } from './meta.page';

describe('MetaPage', () => {
  let component: MetaPage;
  let fixture: ComponentFixture<MetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
