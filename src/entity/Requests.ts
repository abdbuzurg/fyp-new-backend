import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './User';

@Entity()
export class Requests extends BaseEntity{
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerOfTheFeedId: number;
  @ManyToOne(() => User, user => user.ownerOfTheFeed)
  @JoinColumn({ name: "ownerOfTheFeedId"})
  ownerOfTheFeed: User;

  @Column()
  requestorId: number;
  @ManyToOne(() => User, user => user.requestor)
  @JoinColumn({ name: "requestorId" })
  requestor: User;

  @Column()
  feedType: FeedType;

  //Depending on the feedType the feedId may be directing towards ClientFeed or DriverFeed
  @Column()
  feedId: number;

  @Column()
  requestStatus: Status;

  @Column()
  responseStatus: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

enum Status {
  declined,
  pending,
  accepted
}

enum FeedType {
  ClientFeed,
  DriverFeed
}

