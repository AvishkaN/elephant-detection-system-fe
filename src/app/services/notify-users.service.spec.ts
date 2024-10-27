import { TestBed } from '@angular/core/testing';

import { NotifyUsersService } from './notify-users.service';

describe('NotifyUsersService', () => {
  let service: NotifyUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
