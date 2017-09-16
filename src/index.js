import icon from './icon.png'
import Preview from "./Preview"
import getSuggestions from "./getWikiSugg"
import getPage from "./getWikiPreview"
const order = 12
const previewCharBlacklist = ['\uf8ff', '\uFFFD']

const plugin = ({ term, actions, display }) => {
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(' https://www.wikipedia.org/search-redirect.php?family=wikipedia&language=en&search=' + q + '&language=en&go=Go')
    actions.hideWindow()
  }

  var wikiSuggestions = getSuggestions(term)
  wikiSuggestions.then(data => {
    var dynOrder = order;
    var pagesString = data[1].map(title => encodeURIComponent(title)).join("|");
    var pages = getPage(pagesString)
    pages.then(pagesData => {
      var rawData = pagesData.query.pages
      var keys = Object.keys(rawData)
      var extracts = [];
      for(var i = 0; i<keys.length; i++) {
          var extractObject = rawData[keys[i]]
          var idx = extractObject.title
          var src = (typeof extractObject.thumbnail != 'undefined' ? extractObject.thumbnail.source : "")
          extracts[idx] = {"text": extractObject.extract, "img": src}
          previewCharBlacklist.map(char => {extracts[idx].text = extracts[idx].text.replace(char, '')})
      }

      data[1].map(entry => {
        display({
          icon: icon,
          title: entry,
          order: dynOrder++,
          onSelect: () => search(entry),
          getPreview: () => <Preview term={entry} previewText={extracts[entry].text} thumbnail={extracts[entry].img} />
        })
      })
    })
  })
}

module.exports = {
  fn: plugin
}
