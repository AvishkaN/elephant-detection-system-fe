import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerNotificationViewComponent } from './danger-notification-view.component';

describe('DangerNotificationViewComponent', () => {
  let component: DangerNotificationViewComponent;
  let fixture: ComponentFixture<DangerNotificationViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangerNotificationViewComponent]
    });
    fixture = TestBed.createComponent(DangerNotificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
