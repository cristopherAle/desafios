import { Navbarm, Container} from "react-bootstrap";
import './header.css'

const Header = props => {
    const {titulo} = props
    return(
        <Container style={{backgroundColor: "blue", color:"white"}} class="HeaderContainer">
            <h1>{titulo}</h1>
        </Container>
      );
}
export default Header