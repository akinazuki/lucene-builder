export default function escape(str) {
  return [].map.call(str, function escapeSpecialCharacter(char) {
    if (char === '+'
      || char === '-'
      || char === '&'
      || char === '|'
      || char === '!'
      || char === '('
      || char === ')'
      || char === '{'
      || char === '}'
      || char === '['
      || char === ']'
      || char === '^'
      || char === '"'
      || char === '~'
      || char === '*'
      || char === '?'
      || char === ':'
      || char === '\\'
      || char === '/'
    ) return '\\' + char
    else return char
  }).join('')
}