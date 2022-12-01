import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderFooterComponent } from './hearder-footer.component';

describe('HearderFooterComponent', () => {
  let component: HearderFooterComponent;
  let fixture: ComponentFixture<HearderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
