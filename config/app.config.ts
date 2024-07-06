import { registerAs } from "@nestjs/config";

export default registerAs('config', () => ({
    port: Number(process.env.PORT) || 3000
}));