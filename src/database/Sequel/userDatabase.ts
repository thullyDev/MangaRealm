import { SQL_URL } from "../../utilities/config.ts";
import type { _DBUser } from "./models.ts";
import { PostgresDB } from "./postgres.ts";

const psqlDB: PostgresDB = new PostgresDB(SQL_URL);

/**
 * Retrieves a user record from the PostgreSQL database based on a specified key-value pair.
 * @param key The name of the column used in the WHERE clause to identify the user.
 * @param entity The value of the key column to identify the specific user to retrieve.
 * @returns A Promise that resolves to `_DBUser` object representing the user record,
 *          or `null` if no user is found with the provided key-value pair.
 */
export async function getUser({ key, entity }: { key: string; entity: string }): Promise<_DBUser | null> {
  const query: string = `SELECT * FROM "user" WHERE ${key} = '${entity}';`;
  const response = await psqlDB.execute(query);
  const result = response.rows;
  if (!result) return null;

  return result[0];
}

interface _updateUser {
  key: string;
  entity: string;
  data: Record<string, any>[];
}

/**
 * Updates a user record in the PostgreSQL database.
 * @param key The name of the column used in the WHERE clause to identify the user.
 * @param entity The value of the key column to identify the specific user to update.
 * @param data An array of objects where each object contains column and value pairs to update.
 * @returns Returns `true` if the user record was successfully updated, and false if the no user is founded, or if the execution fails`.
 */
export async function updateUser({ key, entity, data }: _updateUser): Promise<boolean> {
  const updateQuery = data.map(({ column, value }) => `set ${column} = '${value}'`).join(", ");
  const query = `UPDATE "user" ${updateQuery} where ${key} = '${entity}'`;
  let response;
  try {
    response = await psqlDB.execute(query);
  } catch (error) {
    console.error(error);
    return false;
  }

  if (response.rowCount == 0) {
    console.error(`no user row as ${entity}`);
    return false;
  }

  return true;
}
