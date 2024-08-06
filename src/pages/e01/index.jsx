import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

export default function E01() {
    const [valorPedido, SetValorPedido] = useState(0);
    const [valorCupom, SetValorCupom] = useState(0);
    const [resultado, setResultado] = useState(0)

    const Calculardesconto = () => {
        const desconto = (valorPedido * valorCupom) / 100;
        const total = valorPedido - desconto
        setResultado(total > 0 ? total: 0)
    }

    return (
        <div className='pagina-e01'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 01 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input placeholder='0' 
                            value={valorPedido}
                            onChange={(e) => SetValorPedido(Number(e.target.value))}
                            />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input placeholder='0'
                            value={valorCupom}
                            onChange={(e) => SetValorCupom(Number(e.target.value))}
                            />
                        </div>
                        <a href='#' className='executar' onClick={Calculardesconto}>Executar</a>
                    </div>
                    <h3 className='resultado'>Resultado: O total é R$ {resultado.toFixed(2)}</h3>
                </div>

            </div>
        </div>
    )
}
