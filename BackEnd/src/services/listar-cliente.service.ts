import prismaClient from "../prisma";


class ListarClienteService {
  async execute(){

    const clientes = await prismaClient.customer.findMany()
    
    return clientes
  }
}


export {ListarClienteService}