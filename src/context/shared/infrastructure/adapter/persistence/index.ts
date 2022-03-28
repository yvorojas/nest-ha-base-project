export default class BasePersistenceAdapter {
  connector;
  repository;
  constructor(connector, repository) {
    this.connector = connector;
    this.repository = repository;
  }

  getById = async (id: string) => {
    await this.connector.connect();
    return this.connector
      .get()
      .getRepository(this.repository)
      .findOne(id)
      .then(async (response) => response)
      .finally(async () => {
        await this.connector.close();
      });
  };

  create = async (entity) => {
    await this.connector.connect();
    const connectorRepository = this.connector
      .get()
      .getRepository(this.repository);
    console.log(entity);
    const createdEntity = await connectorRepository.save(entity);
    await this.connector.close();
    return createdEntity;
  };
}
