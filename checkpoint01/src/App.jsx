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
  
  const [error,setError] = useState();

  const [card, setCard] = useState(
    [

    ]
  );
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if(cor.nome.length < 3 || cor.hexadecimal.length != 7){
      setError("Dados errados");
      alert("Dados enviados não estão corretos. Digite o nome da cor e o hexadecimal com # mais os 6 dígitos.");
    }else{   
      setCard([...card, 
        {
          nome: cor.nome, 
          hexadecimal: cor.hexadecimal
        }
      ])

      setError("");
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
        <span className='errorLine'>{error}</span>
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