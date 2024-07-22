import { createClient } from "redis";
import { REDIS_URL } from "../../utilities/config";


const client = await createClient({
        url: REDIS_URL,
    }).connect();

export class Cache {
  private static _instance: Cache;

  public static getInstance(): Cache {
    if (!Cache._instance) {
      Cache._instance = new Cache();
    }
    return Cache._instance;
  }

  private defaultExpiry: number = 86400; // 24 hours

  public async get(name: string): Promise<string | null> {
    return await client.get(name);
  }

  public async set(name: string, value: string, expiry: number = this.defaultExpiry): Promise<void> {
    await client.set(name, value, { EX: expiry });
  }

  public async hget(name: string): Promise<any | null> {
    const data = await client.get(name);
    return data ? JSON.parse(data) : null;
  }

  public async hset(name: string, data: any, expiry: number = this.defaultExpiry): Promise<void> {
    await this.set(name, JSON.stringify(data), expiry);
  }

  public delete(name: string): void {
    client.del(name);
  }

  public disconnet(): void {
    client.disconnect();
  }
}
