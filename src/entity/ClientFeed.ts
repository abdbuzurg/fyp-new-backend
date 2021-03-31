import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { User } from './User';

@Entity()
export class ClientFeed extends BaseEntity{
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  driverId: number;
  @ManyToOne(() => User, user => user.clientFeed)
  @JoinColumn({ name: "driverId"})
  driver: User;

  @ManyToMany(() => User)
  @JoinTable()
  reservedBy: User[]
  
  @Column()
  destinationFrom: string;
  
  @Column()
  destinationTo: string;

  @Column()
  pricing: string;

  @Column()
  carModel: string;

  @Column()
  numberOfSeats: number;

  @Column()
  departureDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}