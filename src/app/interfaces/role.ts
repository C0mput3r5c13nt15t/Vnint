/* eslint-disable @typescript-eslint/naming-convention */

/**
 * The basic role interface
 */
export interface Role {
    id: number;
    name: string;
    guard_name?: string;
    created_at?: Date;
    updated_at?: Date;

    errors?: any[];
    show_permissions: boolean;
    permissions: any[];
    permissions_names?: string[];
}
