import { of, throwError } from 'rxjs';
import { UserContentComponent } from './user-content.component';
import { ISearchUsersResponse } from '../../models/searchUsersResponse';
import { MatDialog } from '@angular/material/dialog';

describe('UserContentComponent', () => {
  let component: UserContentComponent;
  let userService: any;
  let dialog: MatDialog;

  beforeEach(() => {
    userService = jasmine.createSpyObj('UserService', ['searchUsers']);
    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    component = new UserContentComponent(userService, dialog);
  });

  it('should call searchUsers with correct parameters on onPageChange', () => {
    const pageIndex = 1;
    const data = 'admin';
    const response: ISearchUsersResponse = {
      users: [
        {
          id: 1,
          name: 'admin',
          contact: 'я админ) могу всё',
          role: 'admin',
          password:
            '$2b$10$1zhfZBHaYxJ4U1Vx8TdWCOQ18mlvh7Y5e9be.3TfkN9nSYy6VBlle',
        },
      ],
      total: 1,
    };

    userService.searchUsers.and.returnValue(of(response));

    component.onPageChange(pageIndex, data);

    expect(userService.searchUsers).toHaveBeenCalledWith(data, 10, pageIndex);
    expect(component.users).toEqual(response.users);
    expect(component.totalCount).toEqual(response.total);
  });
  it('should handle error on onPageChange', () => {
    const pageIndex = 1;
    const data = 'admin';
    const error = { error: 'Test error' };

    userService.searchUsers.and.returnValue(throwError(error));

    spyOn(component, 'openModal');

    component.onPageChange(pageIndex, data);

    expect(component.openModal).toHaveBeenCalledWith(error.error);
  });
});
