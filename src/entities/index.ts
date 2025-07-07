import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("question_data")
export class Questions {
  @PrimaryGeneratedColumn("rowid")
  id!: number;
  @Column({ type: "longtext", name: "answer" })
  answer!: string;
  @Column({ type: "timestamp", name: "created_time" })
  createdTime!: Date;
  @Column({ type: "timestamp", name: "last_review_time" })
  lastReviewTime!: Date;
  @Column({ type: "varchar", length: 500, name: "question" })
  question!: string;
}
