import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    console.log(exception);

    response.json({
      timestamp: new Date().toISOString(),
      path: request.route.path,
      message: exception.message,
      params: request.params,
      stack: `${exception.stack.slice(0, 50)}...`,
    });
  }
}
