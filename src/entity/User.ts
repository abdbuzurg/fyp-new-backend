import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { ClientFeed } from './ClientFeed';
import { DriverFeed } from './DriverFeed';
import { Requests } from './Requests';

@Entity()
export class User extends BaseEntity{
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mobileNumber: string;

  @Column()
  superUser: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  // <------------------For relations---------------------->
  @OneToMany(() => DriverFeed, driverFeed => driverFeed.client)
  driverFeed: DriverFeed[];
 
  @OneToMany(() => ClientFeed, clientFeed => clientFeed.driver)
  clientFeed: ClientFeed[];
  
  @OneToMany(() => Requests, requests => requests.requestor)
  requestor: Requests[];
  
  @OneToMany(() => Requests, requests => requests.ownerOfTheFeed)
  ownerOfTheFeed: Requests[];

}