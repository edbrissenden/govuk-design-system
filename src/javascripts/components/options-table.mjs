var OptionsTable = {
  init: function () {
    OptionsTable.expandMacroOptions()
  },
  // Open Nunjucks tab and expand macro options details when URL hash is '#options-[exampleName]'
  expandMacroOptions: function () {
    var hash = window.location.hash

    if (hash.match('^#options-')) {
      var exampleName = hash.split('#options-')[1]

      // Is hash for a specific options table? eg. #options-checkboxes-example--hint
      var isLinkToTable = hash.indexOf('--') > -1
      if (isLinkToTable) {
        exampleName = exampleName.split('--')[0]
      }

      if (exampleName) {
        var tabLink = document.querySelector(
          'a[href="#' + exampleName + '-nunjucks"]'
        )
        var optionsDetailsElement = document.getElementById(
          'options-' + exampleName + '-details'
        )

        if (!tabLink || !optionsDetailsElement) {
          return
        }

        tabLink.setAttribute('aria-expanded', 'true')
        tabLink.parentNode.className += ' app-tabs__item--current'

        optionsDetailsElement.parentNode.removeAttribute('hidden')
        optionsDetailsElement.open = true

        window.setTimeout(function () {
          tabLink.focus()
          if (isLinkToTable) document.querySelector(hash).scrollIntoView()
        }, 0)
      }
    }
  }
}

export default OptionsTable
