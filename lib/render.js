function assign(objA, objB) {
  for (const key in objB) {
    objA[key] = objB[key]
  }

  return objA
}

function baseCss(options) {
  let sizeSelector = `#${options.loaderContainerId}`
  if (options.fullSizeBody) {
    sizeSelector += ', html, body'
  }

  return `
    ${sizeSelector} {
      height: 100%;
      margin: 0;
    }

    #${options.loaderContainerId} {
      background: ${options.background};
    }

    .${options.prefix}loader-element {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
}

function injectStylesheet(document, stylesheetContent) {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(stylesheetContent))
  document.head.appendChild(style)
  return style.sheet
}

export default function render(loader, options = {}) {
  options = assign({
    document,
    prefix: '',
    color: '#333',
    background: '#fff',
    fullSizeBody: false,
    loaderContainerId: 'loader-container',
  }, options)

  const {prefix, loaderContainerId} = options
  const loaderResults = loader(options)
  const loaderContainer = options.document.getElementById(loaderContainerId)

  const css = baseCss(options) + '\n' + loaderResults.css
  injectStylesheet(options.document, css)
  loaderContainer.innerHTML = `
    <div class="${prefix}loader-element">
      ${loaderResults.html || ''}
    </div>
  `
}
