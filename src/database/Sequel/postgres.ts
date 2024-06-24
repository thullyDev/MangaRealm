import pg, { type QueryResult, type Client as _Client } from 'pg'

const { Client } = pg

export class PostgresDB {
    private client: _Client;

    constructor(DB_URL: string) {
        this.client = new Client({ connectionString: DB_URL });
        this.client.connect()
        this.client.on('error', (err) => {
          console.error('something bad has happened!', err.stack)
        })
    }

    async execute(query: string): Promise<QueryResult> {
        const result = this.client.query(query)
        return result
    }

    async close_connection() {
        await this.client.end();
    }
}
