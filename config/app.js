export const isProduction = process.env.NODE_ENV === 'production';
export const isDebug = process.env.NODE_ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug ? 'http://localhost:3000' : 'http://localhost:3000';
