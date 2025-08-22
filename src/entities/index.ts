import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("question_data")
export class Questions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "uuid" })
  uuid!: number;
  @Column({ type: "longtext", name: "answer" })
  answer!: string;
  @CreateDateColumn({
    name: "created_time", // 数据库字段名
    type: "timestamp", // 或 datetime
    precision: 6, // 👈 保留微秒
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdTime!: Date;

  @UpdateDateColumn({
    name: "last_review_time",
    type: "timestamp",
    precision: 6,
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  lastReviewTime!: Date;
  @Column({ type: "varchar", length: 500, name: "question" })
  question!: string;
}
