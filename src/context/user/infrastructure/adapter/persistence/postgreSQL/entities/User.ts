import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import UserEntity from '../../entities/User';

@Entity({ name: 'usuario' })
export default class User extends BaseEntity implements UserEntity {
  constructor(fields?: Record<string, unknown>) {
    super();
    if (fields) this.setFields(fields);
  }

  setFields(fields: any) {
    const entries = Object.entries(fields);
    for (const [k, v] of entries) {
      this[k] = v;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'firstname' })
  firstName: string;

  @Column({ name: 'lastname' })
  lastName: string;
}
