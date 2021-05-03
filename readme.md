# sec

> Convert a time string to seconds: `'00:22:17'` → `1337`

## Install

```
$ npm install sec
```

## Usage

```js
import toSeconds from 'sec';

// hours:minutes:seconds
toSeconds('00:22:17');
//=> 1337

toSeconds('22:17');
//=> 1337

toSeconds('17');
//=> 17
```
