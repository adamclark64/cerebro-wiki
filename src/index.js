import icon from './icon.png'

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

  display({
    icon: icon,
    order: order, // High priority
    title: `Search Wikipedia for ${term}`,
    onSelect: () => search(term)
  })
}

module.exports = {
  fn: plugin
}
