import prismaClient from "../prisma";

export default interface DeletCliente{
  id:string;
}


class DeletarClienteService{
  async execute({id}: DeletCliente){
    if(!id){
      throw new Error("Informe o id do cliente")
    }
    
    const acharCliente = await prismaClient.customer.findFirst({
      where:{
        id:id
      }
    })

    if(!acharCliente){
      throw new Error("Cliente não encontrado")
    }

    await prismaClient.customer.delete({
      where:{
        id: acharCliente.id
      }
    })

    return {message: "Cliente deletado com sucesso"}
  }


}

export { DeletarClienteService }