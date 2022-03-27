/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The basic role interface
 */
 export interface Timeframe {
  id?: number;
  project_id?: number;
  date: Date;
  from: Date;
  until: Date;
  created_at?: Date;
  updated_at?: Date;
}
