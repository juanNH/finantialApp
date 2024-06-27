import * as redisStore from 'cache-manager-redis-store';

export const redisConfig =  {
    useFactory: async () => ({
      store: redisStore as any,
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD || undefined,
      // ttl: 1000,
    }),
    isGlobal: true,
  }