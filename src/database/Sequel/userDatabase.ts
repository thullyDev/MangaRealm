import { SQL_URL } from '../../utilities/config.ts';
import type { _DBUser } from './models.ts';
import { PostgresDB } from './postgres.ts'; 

const psqlDB: PostgresDB = new PostgresDB(SQL_URL);

export async function getUser({ key, entity }: { key: string, entity: string }): Promise<_DBUser | null> {
    const query: string = `select * from "user" where ${key} = '${entity}';`;
    const response = await psqlDB.execute(query)
    const result = response.rows
    if (!result) return null

    return result[0];
}

export async function updateUser(): Promise<boolean> {
    return true
}
