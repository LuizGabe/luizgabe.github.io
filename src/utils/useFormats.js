export const useFormats = () => {

  const removeAcentos = (string) => {

    const comAcento = ['À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Ŕ', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ', 'ŕ']
    const semAcento = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'D', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'R', 's', 'B', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'b', 'y', 'r']
    const stringSeparada = string.split('')

    for (let i = 0; i < stringSeparada.length; i++) {
      for (let e = 0; e < comAcento.length; e++) {
        if (stringSeparada[i] == comAcento[e]) {
          stringSeparada[i] = semAcento[e]
        }
      }
    }
    return stringSeparada.join('')
  }

  const PrimeiraLetraMaiuscula = (palavra) => {
      if (palavra[0] !== undefined) {
        return palavra[0].toUpperCase() + palavra.substr(1);
      } else {
        return ''
      }
  }

  const fraseLetraMaiuscula = (frase) => {
    const palavras = frase.split(' ')
    const fraseMaiuscula = []
    for(let i = 0; i < palavras.length; i++) {
      fraseMaiuscula.push(PrimeiraLetraMaiuscula(palavras[i]))
    }
    return fraseMaiuscula.join(' ')
  }

    return {
      removeAcentos,
      PrimeiraLetraMaiuscula,
      fraseLetraMaiuscula
    }
}
