/* eslint-disable @typescript-eslint/naming-convention */

import { Timeframe } from './timeframe';

/**
 * The basic project interface
 */
 export interface Project {
  id?: number;
  topic: string;
  image?: string;
  title: string;
  leader_id: number;
  leader?: any;
  description: string;
  cost: number;
  min_grade: number;
  max_grade: number;
  min_participants: number;
  max_participants: number;
  authorized: boolean;
  created_at?: Date;
  updated_at?: Date;

  timeframes?: Timeframe[];
}
