import { FastifyRequest, FastifyReply } from "fastify";
import { CriarClienteService } from "../services/criar-cliente.service"; 

class CriarClienteController {
  async handle(request: FastifyRequest, reply: FastifyReply){

    const {nome, email, cpf, telefone} = request.body as {nome: string, email: string, cpf: string, telefone: string};
    console.log(nome, email, cpf, telefone);
    const criarClienteService = new CriarClienteService();

    const clienteService = new CriarClienteService();

    const cliente = await clienteService.execute({nome, email, cpf, telefone});

    reply.send(cliente);
  }
}

export { CriarClienteController }