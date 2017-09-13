import { memoize } from "cerebro-tools"

const getWikipediaSearchSugg = (term) => {
	const q = encodeURIComponent(term)
	return fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${q}&namespace=0&limit=5&suggest=true`)
	.then(response => response.json())
}

module.exports = memoize(getWikipediaSearchSugg, {maxAge: 60 * 60 * 1000, preFetch: true})