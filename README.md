# Lucene Query String Builder
  
  [![npm version](https://badge.fury.io/js/lucene-builder.svg)](https://badge.fury.io/js/lucene-builder)
  [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Installation

```bash
npm install lucene-builder
```

## Example

```javascript
import { builder, group, and, field, term, range } from "lucene-builder";

var findUserLuceneQueryString = builder(function (data) {
  return group(and(
    field('recording', term(data.recording)),
    field('artist', term(data.artist)),
    field('year', range(data.year.from, data.year.to, true, true))
  ));
});

var luceneQueryString = findUserLuceneQueryString({
  recording: 'シャングリラ',
  artist: '森羅万象',
  year: { from: 2010, to: 2020 }
});

console.log(luceneQueryString === `( recording:"シャングリラ" AND artist:"森羅万象" AND year:[ 2010 TO 2020 ] )`); // true
```
