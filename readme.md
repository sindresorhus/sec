# sec

> Convert a time string to seconds: `'00:22:17'` → `1337`


## Install

```
$ npm install --save sec
```


## Usage

```js
var sec = require('sec');

// hours:minutes:seconds
sec('00:22:17');
//=> 1337

sec('22:17');
//=> 1337

sec('17');
//=> 17
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
