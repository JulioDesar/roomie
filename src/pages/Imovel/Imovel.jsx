import MenuLateral from "../../components/Menu-lateral/MenuLateral";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Imovel.scss";
import { useApiCliente } from "../../hooks/UseApiCliente";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
export default function Imovel() {

    const apiCliente = useApiCliente();
    const [imoveis, setImoveis] = useState([]);
    const [show, setShow] = useState(false);

    const [i, setImovel] = useState();

    const handleClose = (status, id) => {
        mudarStatusImovel(status, id);
        setShow(false);
    }
    const handleShow = (imovel) => {
        setImovel(imovel);
        setShow(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const todosImoveis = async () => {
        await apiCliente.pegarImoveis()
            .then(response => {
                setImoveis(response);
            });
    }

    const mudarStatusImovel = async (status, id) => {
        console.log(status);
        await apiCliente.aceitarImovel(status, id);
    }

    useEffect(() => {
        todosImoveis();
    }, []);

    return (
        <main className="principal">
            <section className="menu">
                <MenuLateral />
            </section>

            <section className="cards" onChange={todosImoveis}>
                {imoveis.map((imovel) => (
                    imovel.status === "EM_ANALISE" && (
                        <Card style={{ width: "14rem" }} key={imovel.id}>
                            <Carousel variant="dark">
                                {imovel.imagens.map((item) => (
                                    <Carousel.Item key={item.id}>
                                        <img
                                            className="d-block w-100"
                                            src={"data:image/png;base64," + item.imagem}
                                            alt="imovel"
                                        /></Carousel.Item>
                                ))}
                            </Carousel>
                            <Card.Body>
                                <Card.Title>{imovel.titulo}</Card.Title>
                                <Card.Text>
                                    {imovel.descricao}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleShow(imovel)}>Detalhes</Button>
                            </Card.Body>
                        </Card>
                    )
                ))}

            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{i?.titulo}</Modal.Title>
                </Modal.Header>
                <Carousel variant="dark">
                    {i?.imagens.map((item) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={"data:image/png;base64," + item.imagem}
                                alt="imovel"
                            /></Carousel.Item>
                    ))}
                </Carousel>
                <Modal.Body>
                    descricao
                    <div>
                        {i?.descricao}
                    </div>
                </Modal.Body>
                <Modal.Body>
                    Endereco
                    <div>
                        Cep: {i?.cep}
                    </div>
                    <div>
                        Numero: {i?.numero_casa}
                    </div>
                    <div>
                        Cidade: {i?.cidade}
                    </div>
                    <div>
                        Estado: {i?.estado}
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div>
                        Aceita algum genero especifico: {i?.sexo}
                    </div>
                    <div>
                        Quantidade de Quartos: {i?.numeroQuartos}
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div>
                        Preco: {i?.preco}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => handleClose("REPROVADO", i?.id)}>
                        Recusar Imovel
                    </Button>
                    <Button variant="primary" onClick={() => handleClose("APROVADO", i?.id,)}>
                        Aceitar Imovel
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    )

}