import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyUsersViewComponent } from './notify-users-view.component';

describe('NotifyUsersViewComponent', () => {
  let component: NotifyUsersViewComponent;
  let fixture: ComponentFixture<NotifyUsersViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifyUsersViewComponent]
    });
    fixture = TestBed.createComponent(NotifyUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
