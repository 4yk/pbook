import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Phone{
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	name:string;

	@Column()
	phone:string;

	@Column()
	firm:string;

	@Column()
	dep:string;
}