import prismaClient from "../prisma";


export default interface AddCliente{
  nome:string;
  email:string;
  cpf:string;
  telefone:string;
}

class CriarClienteService {
  async execute({nome, email, cpf, telefone}: AddCliente){

    if(!nome || !email || !cpf || !telefone){
      //pra quem for mexer no back, a ideia é criar um filtro ou mais exeções para evitar erros
      throw new Error("Preencha todos os campos")
    }
    
    const cliente = await prismaClient.customer.create({
      data:{
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        status:true
      }})

    return cliente
    
  }
}

export { CriarClienteService }