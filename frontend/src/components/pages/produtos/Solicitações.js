import api from "../../../utils/api";
import { useState, useEffect } from 'react'
import {Container, Title, ContainerProduto} from "./StylesProdutos"

function Solicitações() {
    const [produtos, setProdutos] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    // Pegar as minhas compras e armazenar na variavel produtos
    useEffect(() => {
        api.get('/produtos/minhasCompras', {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          })
          .then((response) => {
            console.log(response.data)
            setProdutos(response.data)
          })
      }, [token])

  return (
    <>
    <Title>
      <h1>Minhas compras</h1>
    </Title>
    <Container>
      
        {produtos.length > 0 &&
          produtos.map((produto) => (
            <ContainerProduto key={produto._id}>
              <img
                src={`${process.env.REACT_APP_API}/images/produtos/${produto.imagens[0]}`}
                alt={produto.nome}
              />
              <span>{produto.name}</span>
              <div>
                <p>
                  <span >Ligue para:</span> {produto.usuarios.telefone}
                </p>
                <p>
                  <span>Fale com:</span> {produto.usuarios.nome}
                </p>
              </div>
              <div>
                {produto.available ? (
                  <p>Compra em processo</p>
                ) : (
                  <p>Parabéns por concluir a compra!</p>
                )}
              </div>
            </ContainerProduto>
          ))}
        {produtos.length === 0 && <p>Ainda não há produtos solicitados!</p>}
    </Container>
    </>
  )
}

export default Solicitações