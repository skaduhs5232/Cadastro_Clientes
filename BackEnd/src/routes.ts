import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CriarClienteController } from "./controllers/criar-cliente.controller";
import { ListarCLienteController } from "./controllers/listar-cliente.controller";
import { DeletarClienteController } from "./controllers/deletar-cliente.controller";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: "world" };
    });

    fastify.post("/cliente", async (request : FastifyRequest, reply: FastifyReply) => {
        return new CriarClienteController().handle(request, reply)
    })

     fastify.get("/clientes", async (request : FastifyRequest, reply: FastifyReply) => {
        return new ListarCLienteController().handle(request, reply)
    })

     fastify.delete("/cliente", async (request : FastifyRequest, reply: FastifyReply) => {
        return new DeletarClienteController().handle(request, reply)
    })
}