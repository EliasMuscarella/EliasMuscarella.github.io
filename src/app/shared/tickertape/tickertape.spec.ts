import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tickertape } from './tickertape';

describe('Tickertape', () => {
  let component: Tickertape;
  let fixture: ComponentFixture<Tickertape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tickertape],
    }).compileComponents();

    fixture = TestBed.createComponent(Tickertape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
