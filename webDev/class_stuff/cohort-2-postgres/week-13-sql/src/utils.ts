import { Client } from 'pg';

export async function getClient(): Promise<Client> {
    const client = new Client("postgresql://postgres.qjplebqhsakakovinlza:wfh@1LPM@USA@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");
    await client.connect();
    return client;
}