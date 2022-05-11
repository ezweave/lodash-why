# lodash-why

Dear reader, you've stumbled onto a little project I built to compare `lodash` performance vs the standard JS SDK.

## Running

Right now, the number of runs, _n_, is hardcoded to 50 (for each function).  You can change this in `index.ts`.  I will update it to take it from the command line.

For now:

```shell
yarn
yarn run.local
```

You should see:

![Output](/images/example_run.png)

## Generate New Data
The project is populated with test data, but if you need to generate a new list of users, you can run:

```shell
yarn generate.users
```