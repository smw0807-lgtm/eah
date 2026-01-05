import { Reflector } from '@nestjs/core';
import { Role } from 'generated/prisma/enums';

export const RBAC = Reflector.createDecorator<Role>();
