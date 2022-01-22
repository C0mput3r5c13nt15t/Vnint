/* eslint-disable @typescript-eslint/naming-convention */

import { Project } from './project';

/**
 * The basic preference interface
 */
 export interface Preference {
  id: number;
  user_id: number;
  project_id: number;
  created_at?: Date;
  updated_at?: Date;

  project?: Project;
}
