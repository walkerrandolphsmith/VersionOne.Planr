#VersionOne.Planr [![Travis-CI][ci-badge]][ci] [![GitHub issues][issues-badge]][issues]

Story Planning made easy.

##Issues 

Please file bugs [here][issues].

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.  
For example `git commit -m "This closes #34, and closes #23"`

##Development

### Configure
Create a `.env` file in the root of the application that contains valid environment varaibles to connect to VersionOne instance:

```
V1Host=builds.versionone.net
V1Instance=PR_16.0.13.14860
V1User=admin
V1Password=admin
NODE_ENV=development
```

then run:

```npm install```

### Run

`npm start` will start the web server, however the following environment variables will need valid values:

### Test

`npm test` will run the unit tests. Wallaby is also supported.


[ci]: https://travis-ci.org/walkerrandolphsmith/VersionOne.Planr
[ci-badge]: https://img.shields.io/travis/walkerrandolphsmith/VersionOne.Planr.svg

[issues]: https://github.com/walkerrandolphsmith/VersionOne.Planr/issues
[issues-badge]: https://img.shields.io/github/issues/walkerrandolphsmith/VersionOne.Planr.svg
