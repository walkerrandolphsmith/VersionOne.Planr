#VersionOne.Planr [![Travis-CI][ci-badge]][ci] [![GitHub issues][issues-badge]][issues]

Story Planning made easy.

##Issues 

Please file bugs [here][issues].

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.  
For example `git commit -m "This closes #34, and closes #23"`

##Development

### Test

`npm test` will run the unit tests. Wallaby is also supported.

### Run

`npm start` will start the web server, however the following environment variables will need valid values:

1. V1Host
2. V1Instance
3. V1User
4. V1Password

Edit the npm script, `start` with the environment variables for your instance.

example:
```
"start": "cross-env NODE_ENV=development V1Host=v1host.com V1Instance=v1prod V1User=admin V1Password=admin nodemon src/server/index.js",
```


[ci]: https://travis-ci.org/walkerrandolphsmith/VersionOne.Planr
[ci-badge]: https://img.shields.io/travis/walkerrandolphsmith/VersionOne.Planr.svg

[issues]: https://github.com/walkerrandolphsmith/VersionOne.Planr/issues
[issues-badge]: https://img.shields.io/github/issues/walkerrandolphsmith/VersionOne.Planr.svg
