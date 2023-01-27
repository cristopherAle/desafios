import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header/header'
import CardComponent from './components/Card/CardImage'
import FooterComponent from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <HeaderComponent
        titulo="Galeria de imagenes con React"/>
        <div class="card-container">
           <CardComponent
              src="https://cdn.pixabay.com/photo/2016/11/29/07/15/animal-1868046_960_720.jpg"
              titulo="Tortuga "
              comentario="Las tortugas marinas poseen unos caparazones que se unen lateralmente, lo que las protege de los depredadores y las variaciones en la temperatura."
              
            />
            <CardComponent
              src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg"
              titulo="Guacamayo Amarillo"
              comentario="Macho y hembra adultos son generalmente iguales, su plumaje es de color azul en la parte superior, y amarillo de oro en el pecho y el vientre."
            />   
             <CardComponent
              src="https://cdn.pixabay.com/photo/2020/04/14/11/21/fox-5042242_960_720.jpg"
              titulo="Zorro Rojo"
              comentario="Es una especie de cánido pequeña, aunque es el más grande del género Vulpes. Los ejemplares adultos de zorro común pesan de 3.6 a 7.6 kg."
            />   
             <CardComponent
              src="https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_1280.jpg"
              titulo="Colibrí"
              comentario="Los colibríes son seres nativos de casi todos los ecosistemas, bosques templados, selvas húmedas, desiertos, incluso en los picos más montañosos."
            />   
             <CardComponent
              src="https://cdn.pixabay.com/photo/2017/09/12/06/46/lion-fish-2741462_960_720.jpg"
              titulo="Pez León"
              comentario="Se caracteriza por las diferentes rayas de sus aletas pectorales y sus largas antenas blancas y negras. Carece de tejido entre sus aletas dorsales."
            />   
           
            
        </div>
       <FooterComponent
          foottitulo="Todos los derechos reservados"
        />
       
    </div>
  );
}

export default App;
