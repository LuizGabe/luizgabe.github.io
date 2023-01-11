import { expect } from 'chai';
import useFormats from './useFormats.js';

describe('useFormats', () => {
  const { removeAcentos, primeiraLetraMaiuscula, fraseLetraMaiuscula } = useFormats()

  it('remove acentos', () => {
    expect(removeAcentos('órgão')).to.equal('orgao');
  });

  it('coloca a primeira letra maiuscula', () => {
    expect(primeiraLetraMaiuscula('teste')).to.equal('Teste');
  });

  it('coloca todas as palavras de uma frase com a primeira letra maiuscula', () => {
    expect(fraseLetraMaiuscula('luiz e um lindo')).to.equal('Luiz E Um Lindo');
  });
});
