var url = require('url')
var addr = 'https://video.google.com:8080/ljuniversity/about?branch=CSE&year=2025#students'
var up = url.parse(addr, true) //DeprecationWarning: `url.parse()`
console.log(up)
// process.noDeprecation = true
// option 1 or 2.run as node --no-deprecation url1.js
function leap() {
    year = up.query.year
    if (year % 4 == 0) {
        console.log(`yes , ${year} is leap a Year`)
    }
    else {
        console.log(`No , ${year} is not a leap Year`)
    }
}
leap()

// output
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'video.google.com:8080',
//   port: '8080',
//   hostname: 'video.google.com',
//   hash: '#students',
//   search: '?branch=CSE&year=2025',
//   query: [Object: null prototype] { branch: 'CSE', year: '2025' },
//   pathname: '/ljuniversity/about',
//   path: '/ljuniversity/about?branch=CSE&year=2025',
//   href: 'https://video.google.com:8080/ljuniversity/about?branch=CSE&year=2025#students'
// }
// No , 2025 is not a leap Year
