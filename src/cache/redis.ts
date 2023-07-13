import Redis from "ioredis";

class RedisClient {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT!),
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
    });
  }

  async get(key: string) {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  async set(key: string, value: any, expiryInSeconds = 60 * 60 * 24 * 7) {
    // default expiry set to 1 week
    await this.redis.set(key, JSON.stringify(value), "EX", expiryInSeconds);
  }
}

const redis = new RedisClient();

export default redis;
