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
    prefix: '',
    color: '#333',
    background: '#fff',
    fullSizeBody: false,
    loaderContainerId: 'loader-container',
  }, options)

  const doc = options.document || (typeof document === 'undefined' && document)
  const {prefix, loaderContainerId} = options
  const loaderResults = loader(options)
  const loaderContainer = doc.getElementById(loaderContainerId)

  injectStylesheet(doc, baseCss(options) + '\n' + loaderResults.css)
  loaderContainer.innerHTML = `
    <div class="${prefix}loader-element">
      ${loaderResults.html || ''}
    </div>
  `
}
