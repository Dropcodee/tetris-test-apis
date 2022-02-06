import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from "typeorm";

@Entity({name: 'favorites'})
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
        public id!: number;
    @Column()
        public repo_id!: string;
    @Column()
        public name!: string;
    @Column()
        public login!: string;
    @Column()
        public avatar_url!: string;
    @Column()
        public size!: number;
    @Column({default: false})
        public favorite!: boolean;
    @Column()
        public description!: string;
    @Column()
        public repo_url!: string;
    @CreateDateColumn()
        public created_at!: Date
    @UpdateDateColumn()
        public updated_at!: Date
}