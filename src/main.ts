import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import UserModule from './context/user/infrastructure/module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    UserModule,
    new FastifyAdapter(),
  );
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('SERVER_PORT'), '0.0.0.0', () =>
    console.log(`Listening on port: ${configService.get('SERVER_PORT')}`),
  );
}
bootstrap();
