import {fastify} from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors'

const app =fastify({logger:true});

const start = async () => {

  await app.register(routes)
  await app.register(cors)

  app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({error: error.message})
  });

    try {
        await app.listen({port: 3333});
    } catch (err) {
      process.exit(1);
    }
}

start();