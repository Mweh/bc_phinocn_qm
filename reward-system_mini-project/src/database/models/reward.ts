import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index'; // Import sequelize from the index.ts file

class Reward extends Model {
  public id!: number;
  public userId!: number;
  public score!: number;
  public rewardType!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Reward.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rewardType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // The sequelize instance
    tableName: 'rewards', // The table name in MySQL
    timestamps: true, // This will automatically add 'createdAt' and 'updatedAt' columns
  }
);

export default Reward;
