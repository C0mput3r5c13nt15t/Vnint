/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The basic error interface
 */
 export interface Error {
  name: string;
  status?: number;
  statusText?: string;
  error?: Error;
  message?: string;
}
