import {builder,group,and,field,term,range} from "./src/index.js";

var findUserLuceneQueryString = builder(function (data) {
  return group(and(
    field('recording', data.recording),
    field('artist', data.artist),
  ));
});

var luceneQueryString = findUserLuceneQueryString({
  recording: 'シャングリラ',
  artist: '森羅万象',
});

console.log(luceneQueryString);