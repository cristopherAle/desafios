import './footer.css';


import {Container} from "react-bootstrap";


const Footer = props => {
    const {foottitulo} = props
    return (
            <Container style={{backgroundColor: "blue", color:"white"}} class="FooterContainer">
                <h1>{foottitulo}</h1>
            </Container>
      );
}
export default Footer
