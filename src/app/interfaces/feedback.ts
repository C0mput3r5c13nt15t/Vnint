/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The basic feedback interface
 */
import {User} from './user';

export interface Feedback {
  id: number;
  type: string;
  short_description: string;
  full_description: string;
  created_by: number;
  creator?: User;
  created_at?: Date;
  updated_at?: Date;
}
