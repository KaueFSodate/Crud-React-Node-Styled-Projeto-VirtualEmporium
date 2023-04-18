import React from 'react'

import api from '../../../utils/api'

import {Container, Title, ContainerProduto} from "./StylesProdutos"

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// hooks
import useFlashMessage from '../../../hooks/useFlashMessage'


function DetalhesProduto() {
  const [produtos, setProdutos] = useState({})
  const [usuarios, setUsuarios] = useState({})
  const { setFlashMessage } = useFlashMessage()
  const [token] = useState(localStorage.getItem('token') || '')
  const { id } = useParams()


  useEffect(() => {
    api.get(`/produtos/ProdutosCadastrados/${id}`).then((response) => {
      setProdutos(response.data)
      setUsuarios(response.data.usuarios)
    })
  }, [id])

  async function schedule() {
    let msgType = 'sucess'

    const data = await api
      .patch(`/produtos/solicitarProduto/${produtos._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  return (
    <>
      <Title>
            <h1>Detalhes produto</h1>
            <p>Se tiver interesse, entre em contato com {usuarios.nome}</p>
      </Title>
      {produtos.nome && (
        
        <Container>
          <ContainerProduto>
            {produtos.imagens.map((image, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_API}/images/produtos/${image}`}
                alt={produtos.nome}
              />
            ))}
          <p>
            <span className="bold">Nome:</span> {produtos.nome}
          </p>
          <p>
            <span className="bold">Descrição:</span> {produtos.descricao}
          </p>
          <p>
            <span className="bold">Valor:</span> R$:{produtos.valor}
          </p>
          {token ? (
            <button onClick={schedule}>Solicitar produto</button>
          ) : (
            <p>
              Você precisa <Link to="/register">criar uma conta</Link> para
              solicitar o produto.
            </p>
          )}
          </ContainerProduto>
        </Container>
      )}
    </>
    
  )
}

export default DetalhesProduto