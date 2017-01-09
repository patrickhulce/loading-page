var noop = function () {}

defineTest('render.js', function (moduleExports) {
  var sandbox, loader, options, loaderResults, mockElement, mockStyle
  var render = moduleExports.default

  var mockDocument = {
    createTextNode: noop,
    getElementById: function () { return mockElement },
    createElement: function () { return mockStyle },
    head: {appendChild: noop},
  }

  beforeEach(function () {
    loader = sinon.stub()
    sandbox = sinon.sandbox.create()
    options = {document: mockDocument}
    mockElement = {}
    mockStyle = {appendChild: noop}

    loader.returns({})
  })

  afterEach(function () {
    sandbox.reset()
  })

  describe('#render', function () {
    it('should work', function () {
      render(loader, options)
    });

    it('should set innerHTML of loader element', function () {
      options.loaderContainerId = 'foobar'
      var stubGetElement = sandbox.stub(mockDocument, 'getElementById')
      stubGetElement.returns(mockElement)

      render(loader, options)
      expect(stubGetElement).to.have.been.calledWith('foobar')
      expect(mockElement).to.have.property('innerHTML').contain('loader-element')
    });
  });
});
