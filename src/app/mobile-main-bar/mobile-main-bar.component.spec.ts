import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMainBarComponent } from './mobile-main-bar.component';

describe('MobileMainBarComponent', () => {
  let component: MobileMainBarComponent;
  let fixture: ComponentFixture<MobileMainBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMainBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMainBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
