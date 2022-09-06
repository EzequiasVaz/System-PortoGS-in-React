import { Link } from 'react-router-dom'
import { List, House, MagnifyingGlass, ChartLineUp, NotePencil, GearSix, X } from 'phosphor-react'

export function MenuLeft() {
    return (


        <nav className="absolute left-0 top-0 flex flex-col justify-between w-28 text-gray-fifth bg-gray-one pt-6 pb-8 h-full hover:w-[288px] transition-all group">
            {/*A classe nav é o pai do grupo, pois coloquei a palavra 'group' ali no final das classes, ou seja, toda vez 
            que qualquer elemento do grupo sofrer algum movimento do mouse acionará os efeitos do grupo que é definido pelo
            group-hover, group-focus e parecidos.
            */}
            <div className='flex flex-col w-full'>
                <button className='place-self-center group-hover:hidden'><List className='' size={32} /></button>
                {/* o button de cima está visivel porém quando o mouser passar em cima da nav bar vai ficar hidden
                 e o button debaixo irá aparecer*/ }
                <button className='hidden place-self-end mr-8 group-hover:flex'><X className='' size={32} /></button>
            </div>


            <ul className='flex flex-col gap-[60px] w-full'>
                <li className='flex w-full justify-center group-hover:ml-[-5px]'><Link to={'/'} className='flex items-end gap-4 text-xl font-normal'><House size={32} /><span className='hidden group-hover:flex'>Principal</span></Link></li>
                <li className='flex w-full justify-center'><Link to={'/'} className='flex items-end gap-4 text-xl font-normal'><MagnifyingGlass size={32} /><span className='hidden group-hover:flex'>Consultas</span></Link></li>
                <li className='flex w-full justify-center'><Link to={'/'} className='flex items-end gap-4 text-xl font-normal'><ChartLineUp size={32} /><span className='hidden group-hover:flex'>Relatórios</span></Link></li>
                <li className='flex w-full justify-center'><Link to={'/'} className='flex items-end gap-4 text-xl font-normal'><NotePencil size={32} /><span className='hidden group-hover:flex'>Cadastros</span></Link></li>
            </ul>

            <div className='flex w-full justify-center'>
                <Link to={'/'} className='flex items-end gap-4 text-xl font-normal'><GearSix size={32} /><span className='hidden group-hover:flex '>Configurações</span></Link></div>

        </nav>
    )
}