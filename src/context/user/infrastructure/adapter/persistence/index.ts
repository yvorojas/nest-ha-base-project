export default interface UserPersistenceAdapter {
  getById(id: string);

  createUser(firstName: string, lastName: string);
}
