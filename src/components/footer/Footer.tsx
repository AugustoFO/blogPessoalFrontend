import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario?.token) {

        component = (

            <div className="flex justify-center bg-ebony text-white flex-grow w-4/5 mx-auto shadow-lg mt-5 rounded-t-lg max-h-40">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>

        )

    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer