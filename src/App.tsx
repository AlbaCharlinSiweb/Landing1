import './App.css'
import Block1 from './blocks/Block1';
import Block2 from './blocks/Block2';
import Block3 from './blocks/Block3';
import Block4 from './blocks/Block4';
import Block5 from './blocks/Block5';
import Block6 from './blocks/Block6';
import Block7 from './blocks/Block7';
import Block8 from './blocks/Block8';
import Footer from './blocks/Footer';

function App() {

  const handleClick = () => {
    const formulario = document.getElementById('formulario_contacto');
    formulario?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Block1 handleClick={handleClick} />
      <Block2 />
      <Block3 />
      <Block4 handleClick={handleClick} />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Footer />
    </div>
  )
}

export default App
