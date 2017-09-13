import icon from './icon.png'
import Preview from "./Preview"
import React from "react"
import { memoize } from "cerebro-tools"
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
    order: order,
    title: term,
    onSelect: () => search(term),
    getPreview: () => Preview("Apple Inc.", "Apple Inc. is an American multinational technology company headquartered in Cupertino, California that designs, develops, and sells consumer electronics, computer software, and online services.")
  })
}

module.exports = {
  fn: plugin
}
