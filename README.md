# lodash-why

Dear reader, you've stumbled onto a little project I built to compare [`lodash`](https://lodash.com/) performance vs the [standard JS SDK](https://developer.mozilla.org/en-US/docs/Web/JavaScript).


## Table of Contents
* [Introduction](#introduction)
* [Running](#running)
* [Caveat Emptor](#caveat-emptor)
* [Generating New Data](#generate-new-data)
## Introduction

I've heard an assertion in debates about JavaScript style that I wanted to either debunk or prove:

> Yeah, but Lodash is slower than the SDK.

Is it?

With this hypothesis in hand, I wanted to build a little demo to test out this hypothesis.

Restating it more simply:

> Standard JavaScript functions run faster than Lodash functions.

The tests contained herein peform some "higher level" operations that are quite common.  For example:

* Find the most popular last name (surname) in a list of people.
* Sorting objects.

Are JS functions faster?

Spoiler alert... they don't seem to be.


[Table of Contents](#table-of-contents)

## Running

You can control the number of times each test is performed with either the standard SDK or `lodash`.  This value, `n` is set on the command line.

```shell
yarn
yarn run.local -n 50
```

You should see:

![Output](/images/example_run.png)


[Table of Contents](#table-of-contents)

## Caveat Emptor

I tried to implement each solution to the best of my knowledge as to present "the best form of an argument" for each approach.  _However_, I am not perfect.  I've been writing FP heavy JS with tools like `lodash`, [`ramdajs`](https://ramdajs.com/), [`rxjs`](https://rxjs.dev/), etc long enough that working "without" those libraries revealed my relative rusty knowledge of the SDK.  

I debated tossing the wonderful [monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)) library, [`monet.js`](https://monet.github.io/monet.js/) into the mix, but nixed that idea.  It would affect the outcome of my experiment.


[Table of Contents](#table-of-contents)

## Generate New Data
The project is populated with test data, but if you need to generate a new list of users, you can run:

```shell
yarn generate.users
```


[Table of Contents](#table-of-contents)