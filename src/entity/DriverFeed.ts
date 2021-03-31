import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { User } from './User';

@Entity()
export class DriverFeed extends BaseEntity{
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;
  @ManyToOne(() => User, user => user.driverFeed)
  @JoinColumn({ name: "clientId"})
  client: User;
  
  @Column()
  destinationFrom: string;
  
  @Column()
  destinationTo: string;

  @Column()
  pricing: string;

  @Column()
  departureDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}