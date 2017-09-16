import { memoize } from "cerebro-tools"

const getWikipediaPagePreview = (term) => {
	return fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${term}&exsentences=3&exintro=1&explaintext=1`)
	.then(response => response.json())
}

module.exports = memoize(getWikipediaPagePreview, {maxAge: 60 * 60 * 1000, preFetch: true})