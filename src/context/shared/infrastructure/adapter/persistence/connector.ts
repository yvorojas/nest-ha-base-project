import { ConnectionManager, Connection } from 'typeorm';

export default class BaseConnector {
  private connectionManager: ConnectionManager;
  private connection: Connection;
  constructor(connectionConfig) {
    this.connectionManager = new ConnectionManager();
    this.connection = this.connectionManager.create(connectionConfig);
  }

  connect = async () => await this.connection.connect();

  close = async () => await this.connection.close();

  get = () => this.connectionManager.get();
}
