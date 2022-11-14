import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  const [cor, setCor] = useState(
    {
      nome: "", 
      hexadecimal: ""
    }
  );

  const [card, setCard] = useState(
    [

    ]
  );
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if(cor.nome.length < 3 || cor.hexadecimal.length != 7){
      alert("Por favor, verifique os dados inseridos no formulário.");
    }else{   
      setCard([...card, 
        {
          nome: cor.nome, 
          hexadecimal: cor.hexadecimal
        }
      ])

      setCor(
        {
          nome: "", 
          hexadecimal: ""
        }
      );
    }
  };

  return (
    <div>
      <div className='top'>
        <h1>ADICIONE UMA COR</h1>
        <form>
          <input className="formInput" value={cor.nome}
            onChange={(evento)=>setCor({...cor, nome: evento.target.value})}
            placeholder='Digite o nome da cor (ex: Azul da Prússia)'/>
          <input className="formInput" value={cor.hexadecimal}
            onChange={(evento)=>setCor({...cor, hexadecimal: evento.target.value})}
            placeholder="Digite o valor hexadecimal (ex: #003153)"/>
          <input className="formButton" type="submit" onClick={handleSubmit} />
        </form>
      </div>

        <h1>CORES ADICIONADAS RECENTEMENTE</h1>

      {card.map((card)=>{
        return(
          <Card key={card.hexadecimal} nome={card.nome} hexadecimal={card.hexadecimal}/>
        )
        }
        )
      }
  
    </div>
  );
}

export default App
