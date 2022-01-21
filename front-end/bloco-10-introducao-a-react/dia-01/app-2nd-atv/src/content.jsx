import { Component } from "react";

const Task = (value) => {
    return (<ul>
        <li>{`O conteúdo é: ${value.conteudo};`}</li>
        <li>{`Status: ${value.status};`}</li>
        <li>{`Bloco: ${value.bloco};`}</li>
    </ul>);
}

class Content extends Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
        return conteudos.map((element) => Task(element));
    }
}

export default Content;
