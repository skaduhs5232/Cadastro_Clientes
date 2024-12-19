import { FastifyRequest, FastifyReply } from "fastify";
import { ListarClienteService } from "../services/listar-cliente.service";

class ListarCLienteController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listarClienteService = new ListarClienteService();

    const clientes = await listarClienteService.execute();

    reply.send(clientes);
  }
}

export { ListarCLienteController }
