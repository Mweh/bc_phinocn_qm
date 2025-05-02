// models/Reward.ts
export interface Reward {
  id: number;
  userId: number;
  score: number;
  rewardType: string; // E.g., voucher, additional leave, etc.
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
