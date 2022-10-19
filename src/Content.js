import React, { Component } from 'react';
import conteudos from './Data';

class Content extends Component {
  render() {
    return (
      <div>
        {
          conteudos.map((status, nome, bloco) => (
            console.log(status, nome, bloco)
          ))
        }
      </div>
    );
  }
}

export default Content;
