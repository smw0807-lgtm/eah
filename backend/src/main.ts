import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const corsConfig = configService.get('cors') as {
    origin: string;
    methods: string;
    allowedHeaders: string;
  };

  app.enableCors({
    origin: corsConfig.origin,
    methods: corsConfig.methods,
    allowedHeaders: corsConfig.allowedHeaders,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
