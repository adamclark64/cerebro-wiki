import icon from './icon.png'
import Preview from "./Preview"
import getSuggestions from "./getWikiSugg"
const order = 12

const plugin = ({ term, actions, display }) => {
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    // https://en.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=javascreipt&namespace=0&limit=10&suggest=true
    // https://www.wikipedia.org/search-redirect.php?family=wikipedia&language=en&search=rice&language=en&go=Go
    // console.log(':::::::::::::::::::', actions);
    actions.open(' https://www.wikipedia.org/search-redirect.php?family=wikipedia&language=en&search=' + q + '&language=en&go=Go')
    actions.hideWindow()
  }

  var wikiSuggestions = getSuggestions(term)
  wikiSuggestions.then(data => {
    var i = order;

    // TODO : Real preview
    data[1].map(entry => {
      display({
        icon: icon,
        title: entry,
        order: i++,
        onSelect: () => search(entry),
        getPreview: () => <Preview term={entry} previewText={entry} />
      })
    })
  })
}

module.exports = {
  fn: plugin
}
