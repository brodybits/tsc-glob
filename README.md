# glob-tsc

The purpose of this command is to add support for file globbing to Typescript compiler `tsc`.

Globs can be provided by:
* Reading `filesGlob` property of tsconfig.json
* Providing it through command line arguments

**All options not supported by this package will be passed to tsc compiler command**

based on: [`tsc-glob`](https://www.npmjs.com/package/tsc-glob) version `1.1.0`

## Installation
Install the package

```bash
npm install --save-dev glob-tsc
```

## Usage

```bash
glob-tsc [options]
```

**Options**

| alias | command                  | description                                          |
| ----- | ------------------------ | ---------------------------------------------------- |
| -h    | --help                   | output usage information                             |
| -V    | --version                | output the version number                            |
| -f    | --tsconfig-file <path>   | tsconfig.json file location. Default ./tsconfig.json |
| -g    | --files-glob <globs>     | File globs                                           |

## Examples

Using alternative tsconfig.json file
```bash
glob-tsc --tsconfig-file config/tsconfig.json --outDir dist --declaration
```

Using command globs (ignores tsconfig.json filesGlob)
```bash
glob-tsc --files-globs src/**/ts/*.ts --outDir dist --declaration
```

## Major TODO items

- cleaner error reporting in the following cases:
  - no file globs or tsconfig.json file present
  - no valid tsc (TypeScript compiler) is found
