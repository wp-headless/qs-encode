<p align="center">
  <a href="https://cloud.drone.io/wp-headless/qs-encode"><img src="https://cloud.drone.io/api/badges/wp-headless/qs-encode/status.svg" alt="drone"></a>
  <a href="https://codecov.io/gh/wp-headless/qs-encode/branch/master"><img src="https://img.shields.io/codecov/c/github/wp-headless/qs-encode/master.svg" alt="Coverage Status"></a>  
  <img src="https://img.shields.io/npm/v/@wp-headless/qs-encode" alt="npm">
  <img src="https://img.shields.io/bundlephobia/minzip/@wp-headless/qs-encode" alt="Bundle size">
</p>

# WP-Headless query string encoder

Simple **tiny** package for encoding a query string

## Install

```bash
yarn add @wp-headless/qs-encode
```

## Usage

```javascript
import qsEncode from 'wp-headless/qs-encode';

qsEncode({ foo:'hello', bar:[1,2,3], baz:true });
//=> 'foo=hello&bar[]=1&bar[]=2&bar[]=3&baz=true'

```

MIT