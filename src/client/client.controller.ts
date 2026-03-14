import { Controller, Get } from '@nestjs/common';
import type { Response, Request } from 'express';
import { Res } from '@nestjs/common';

@Controller('client')
export class ClientController {

    @Get("Clientes")
    findAll(@Res() res : Response) {
         return res.sendFile('pageCliente.html', { root: 'frontend/pages/PageCliente' });
    }
}
