import {Card, Button} from "react-bootstrap";
import './cardimage.css';

const CardImage = props => {
    const {titulo, comentario, src} = props
   
    return(

            <Card class="CardImagen" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title class="card_title">{titulo}</Card.Title>
                    <Card.Text class="card-coment">
                        {comentario}
                    </Card.Text>
                

                </Card.Body>
            </Card>
  
    );
}

export default CardImage