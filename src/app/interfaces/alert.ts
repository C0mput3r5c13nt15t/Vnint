/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The basic alert interface
 */
export interface Alert {
  type: string;
  title?: string;
  message: string;
  created_at: Date;
}
