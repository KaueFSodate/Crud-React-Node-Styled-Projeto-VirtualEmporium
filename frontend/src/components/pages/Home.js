import api from "../../utils/api";

import {Container, Title, ContainerProduto} from "./StylesHome"

import {useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [produtos, setProdutos] = useState([])

    // Pegar os produtos da API
    useEffect(() => {
        api.get('/produtos/ProdutosCadastrados').then((response) => {
          setProdutos(response.data)
        })
      }, [])

    return (  
        <>
        <Title>
          <h1>Compre um produto</h1>
          <p>Veja os detalhes de cada um</p>
        </Title>
        <Container>
                {produtos.length > 0 &&
                produtos.map((produto) => (
                    <ContainerProduto key={produto._id}>
                        <img
                            src={`${process.env.REACT_APP_API}/images/produtos/${produto.imagens[0]}`}
                            alt={produto.nome}
                        />
                        <h3>{produto.nome}</h3>
                        <p>
                            <span className="bold">Valor: R$</span> {produto.valor}
                        </p>
                        {produto.available ? (
                            <Link to={`/produto/${produto._id}`}>Mais detalhes</Link>
                        ) : (
                            <p style={{color: '#015958'}}>Comprado!</p>
                        )}
                    </ContainerProduto>
                ))}
                {produtos.length === 0 && (
                <p>Não há produtos cadastrados ou disponíveis para compra!</p>
                )}
        </Container>

        </>
    );
}

export default Home;