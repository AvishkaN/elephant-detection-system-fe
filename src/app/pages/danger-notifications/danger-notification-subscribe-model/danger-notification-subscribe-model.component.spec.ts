import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerNotificationSubscribeModelComponent } from './danger-notification-subscribe-model.component';

describe('DangerNotificationSubscribeModelComponent', () => {
  let component: DangerNotificationSubscribeModelComponent;
  let fixture: ComponentFixture<DangerNotificationSubscribeModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangerNotificationSubscribeModelComponent]
    });
    fixture = TestBed.createComponent(DangerNotificationSubscribeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
