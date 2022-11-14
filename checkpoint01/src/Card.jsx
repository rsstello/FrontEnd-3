import './app.css';

function Card(props) {

    const background = {
        padding: 35,
        backgroundColor: props.hexadecimal,
        height: 150,
        width: 300,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10,

     }

    return(
        <div key={props.hexadecimal} style={background}>
            <h1>{props.nome}</h1>
            <h2>{props.hexadecimal}</h2>
        </div>
    );

}

export default Card;