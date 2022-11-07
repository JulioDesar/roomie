import MenuLateral from "../../components/Menu-lateral/MenuLateral";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Imovel.scss";
import { useApiCliente } from "../../hooks/UseApiCliente";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
export default function Imovel() {

    const apiCliente = useApiCliente();
    const [imoveis, setImoveis] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const todosImoveis = async () => {
        await apiCliente.pegarImoveis()
            .then(response => {
                setImoveis(response);
            }
            );
    }

    useEffect(() => {
        todosImoveis();
    }, [todosImoveis]);

    return (
        <main className="principal">
            <section className="menu">
                <MenuLateral />
            </section>

            <section className="cards">
                {imoveis.map((imovel) => (
                    <Card style={{ width: "14rem" }} key={imovel.id}>
                        <Carousel variant="dark">
                            {imovel.imagens.map((imagem) => (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imagem}
                                        alt="First slide"
                                    /></Carousel.Item>
                            ))}

                        </Carousel>
                        <Card.Body>
                            <Card.Title>{imovel.titulo}</Card.Title>
                            <Card.Text>
                                {imovel.descricao}
                            </Card.Text>
                            <Button variant="primary">Detalhes</Button>
                        </Card.Body>
                    </Card>
                ))}

            </section>

        </main>
    )

}