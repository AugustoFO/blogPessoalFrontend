import './Home.css';
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="flex justify-center pt-4">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-black 
                                            border-black border-solid border-2 py-2 px-4'
                            >
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="fundoHome hidden lg:block">
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home