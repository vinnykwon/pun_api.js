class PunApi {
	constructor() {
		this.api = "https://punapi.rest/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getRandomPun() {
		const response = await fetch(
			`${this.api}/pun`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPunById(punId) {
		const response = await fetch(
			`${this.api}/pun?id=${punId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPunsByPagination(page) {
		const response = await fetch(
			`${this.api}/pun/pagination?${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}


	async searchPun(query) {
		const response = await fetch(
			`${this.api}/pun/search?${query}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getPunMeme() {
		const response = await fetch(
			`${this.api}/meme`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {PunApi}
