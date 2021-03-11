import UserEntity from '../../entities/User';

export default class MockEntity implements UserEntity {
  id: string;
  firstName: string;
  lastName: string;
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
