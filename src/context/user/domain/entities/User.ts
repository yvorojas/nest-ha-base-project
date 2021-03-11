export default class User {
  private id: string;
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName = (): string => this.firstName;
  getLastName = (): string => this.lastName;
  getFullName = (): string => `${this.firstName} ${this.lastName}`;
}
