#VersionOne.Planr [![Travis-CI][ci-badge]][ci] [![GitHub issues][issues-badge]][issues]

Story Planning made easy.

##Issues 

Please file bugs [here][issues].

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.  
For example `git commit -m "This closes #34, and closes #23"`

##Development

### Dependencies
Start by installing all dependencies:
```
npm install
```

### Configure
Create a `.env` file in the root of the application to connect to VersionOne instance:

```
V1Protocol=http
V1Port=80
V1Host=localhost
V1Instance=VersionOne.Web
```

`V1AccessToken=Bearer <your-access-token>` can bypass cookie expiration in development.

#### All Configuration Options
```
V1Protocol=       //VersionOne instance's protocol
V1Port=           //VersionOne instance's port
V1Host=           //VersionOne instance's host
V1Instance=       //VersionOne instance's name
V1AccessToken=    //VersionOne instance's access token (non-production only)
HOST=             //webserver host
PORT=             //webserver port
DEV_HOST=         //webpack dev server host
DEV_PORT=         //webpack dev server port
API_HOST=         //api server host
API_PORT=         //api server port
NODE_ENV=         //node environment
VERSION_NUMBER=   //application version number
```


### Run
Start a web server that can be reached by localhost:3000 by default.
```
npm run dev
```

### Test
Run unit tests using the cli. Wallaby is also supported.
```
npm test
```

## Production

### Build
Build a production version of the application
```
npm run build
```

### Run
Start a web server that can be reached by localhost:3000 by default.
```
npm start
```


[ci]: https://travis-ci.org/walkerrandolphsmith/VersionOne.Planr
[ci-badge]: https://img.shields.io/travis/walkerrandolphsmith/VersionOne.Planr.svg

[issues]: https://github.com/walkerrandolphsmith/VersionOne.Planr/issues
[issues-badge]: https://img.shields.io/github/issues/walkerrandolphsmith/VersionOne.Planr.svg
