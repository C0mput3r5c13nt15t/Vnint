/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The basic alert interface
 */
export interface Alert {
  icon: string,
  color: 'success' | 'warning' | 'danger' | 'primary';
  title?: string;
  message: string;
  created_at: Date;
}
