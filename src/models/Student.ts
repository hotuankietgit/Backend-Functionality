import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, Timestamp } from "typeorm"

@Entity()
export class Student {
    @PrimaryColumn()
    studentID: string

    @Column({default: ""})
    studentName: string

    @Column({default: ""})
    studentHashedPassword: string

    @Column({default: ""})
    studentEmail: string

    @Column({default: ""})
    hashedOTP: string

    @Column({default: false})
    active: boolean

    @Column({type: "datetime", nullable: true})
    timeToLiveOTP: string 
}