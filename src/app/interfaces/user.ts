/* eslint-disable @typescript-eslint/naming-convention */

import { Preference } from './preference';
import { Role } from './role';
import {Grade_level} from "./grade_level";

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
  grade_level?: Grade_level;
  role_names?: string[];
  preferences?: Preference[];
}
