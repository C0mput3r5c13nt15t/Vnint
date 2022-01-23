/* eslint-disable @typescript-eslint/naming-convention */

import { Permission } from './permission';

/**
 * The basic event interface
 */
 export interface Event {
  id: number;
  title: string;
  description: string;
  from: Date;
  until: Date;
  created_at?: Date;
  updated_at?: Date;

  permissions: Permission[];
  permissions_names?: string[];
}
