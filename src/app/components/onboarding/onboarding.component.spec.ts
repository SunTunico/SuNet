import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboradingComponent } from './onboarding.component';


describe('ColaboradoresComponent', () => {
  let component: OnboradingComponent;
  let fixture: ComponentFixture<OnboradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboradingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
