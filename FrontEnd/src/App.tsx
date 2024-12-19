import { FiTrash } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import { api } from "./services/api";

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  status: string;
  created_at: string;
}

export default function App() {

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const nomeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const cpfRef = useRef<HTMLInputElement | null>(null);
  const telefoneRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadClients();

 }, []);

  async function loadClients() {
    const response = await api.get("/clientes");
    const sortedClients = response.data.sort((a: Cliente, b: Cliente) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    setClientes(sortedClients);
  }

   const handleCpfInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, ""); 
    if (value.length > 11) value = value.slice(0, 11);
    const formatted = value
      .replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, (_match, p1, p2, p3, p4) => {
        if (p4) return `${p1}.${p2}.${p3}-${p4}`;
        if (p3) return `${p1}.${p2}.${p3}`;
        if (p2) return `${p1}.${p2}`;
        return p1;
      });
    event.target.value = formatted;
  };


  function handlesubmit(event: React.FormEvent) {
    event.preventDefault();
    const nome = nomeRef.current?.value;
    const email = emailRef.current?.value;
    const cpf = cpfRef.current?.value;
    const telefone = telefoneRef.current?.value;

    api.post("/cliente", {
      nome,
      email,
      cpf,
      telefone,
    }).then(() => {
      loadClients();
      nomeRef.current!.value = "";
      emailRef.current!.value = "";
      cpfRef.current!.value = "";
      telefoneRef.current!.value = "";
    });
  }

  async function handleDelete(id: number) {
    
    try{
      await api.delete(`/cliente?id=${id}`);
    }
    catch(error){
      window.alert("Erro ao deletar cliente! " + id);
      console.error(error);
    }
    loadClients();
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 flex px-4 justify-center">
      <main className="my-10 w-full md: max-w-2xl">
        <h1 className="text-4xl font-medium text-white flex justify-center">Clientes</h1>
        <form className="flex flex-col my-6 " onSubmit={handlesubmit}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="font-medium text-white">Nome:</label>
                <input 
                type="text"
                placeholder="Digite o nome do cliente"
                className="w-full bg-gray-800 text-white p-2 rounded mt-2"
                ref={nomeRef}
                />
              </div>
              <div className="flex-1">
                <label className="font-medium text-white">Email:</label>
                <input
                type="email"
                placeholder="Digite o email do cliente"
                className="w-full bg-gray-800 text-white p-2 rounded mt-2"
                ref={emailRef}
                />
              </div>
            </div>
            <label className="font-medium mt-4 text-white">CPF:</label>
               <input
                type="text"
                placeholder="Digite o CPF do cliente"
                className="w-full bg-gray-800 text-white p-2 rounded mt-2"
                ref={cpfRef}
                onInput={handleCpfInput} 
              />

                <label className="font-medium mt-4 text-white">Telefone:</label>
                <input 
                type="text"
                placeholder="Digite o telefone do cliente"
                className="w-full bg-gray-800 text-white p-2 rounded mt-2"
                ref={telefoneRef}
                />
        <button className="w-full bg-blue-500 font-medium text-white p-2 rounded mt-4">Salvar</button>
        </form>

        <section className="flex flex-col space-y-4">
          {clientes.map((cliente) => (
             <article key={cliente.id} className="bg-slate-200 p-4 rounded relative hover:scale-105 duration-100">
            <p className="font-medium text-gray-800"><span>Nome: </span>{cliente.nome}</p>
            <p className="font-medium text-gray-800"><span>email: </span>{cliente.email}</p>
            <p className="font-medium text-gray-800"><span>CPF: </span>{cliente.cpf}</p>
            <p className="font-medium text-gray-800"><span>Telefone: </span>{cliente.telefone}</p>
            <p className="font-medium text-gray-800">
              <span>Status: </span>
              <span className={cliente.status ? "text-green-500" : "text-red-500"}>
                {cliente.status ? "ATIVO" : "INATIVO"}
              </span>
            </p>

            <button onClick={() => handleDelete(cliente.id)} className="bg-red-500 p-2 rounded-lg mt-4 flex items-center justify-center absolute right-0 -top-6">
              <FiTrash size={18} color="#FFF"/>
            </button>
          </article>))}
        </section>

      </main>
    </div>
  );
}