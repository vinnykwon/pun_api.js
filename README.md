# pun_api.js
Web-API for [punapi.rest](https://www.punapi.rest/) an pun based memes REST API

## Example
```JavaScript
async function main() {
	const { PunApi } = require("./pun_api.js")
	const punApi = new PunApi()
	const randomPun = await punApi.getRandomPun()
	console.log(randomPun)
}

main()
```
