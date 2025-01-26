

export const envConfig = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT ??'3000',
    limitDefault: process.env.LIMIT||11
});