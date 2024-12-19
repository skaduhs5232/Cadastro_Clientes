import { FastifyRequest, FastifyReply } from "fastify";
import { DeletarClienteService } from "../services/deletar-cliente.service";

class DeletarClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string};

        const deletarClienteService = new DeletarClienteService();

        const cliente = await deletarClienteService.execute({id});

        reply.send(cliente);
    }
}

export { DeletarClienteController }