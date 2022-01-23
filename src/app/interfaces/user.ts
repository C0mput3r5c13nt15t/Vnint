/* eslint-disable @typescript-eslint/naming-convention */

import { Preference } from './preference';
import { Role } from './role';

/**
 * The basic user interface
 */
 export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: Date;
  project_id: number;
  created_at?: Date;
  updated_at?: Date;

  roles?: Role[];
  role_names?: string[];
  preferences?: Preference[];
}
