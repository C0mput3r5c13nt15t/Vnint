/* eslint-disable @typescript-eslint/naming-convention */

import { User } from './user';

/**
 * The basic friendship interface
 */
 export interface Friendship {
  id: number;
  applicant_id: number;
  respondent_id: number;
  state: number;
  created_at?: Date;
  updated_at?: Date;

  applicant?: User;
  respondent?: User;
}
