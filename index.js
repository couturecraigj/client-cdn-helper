const packages = {
  react: {
    '16.3.0': {
      prod: '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.0/umd/react.production.min.js" integrity="sha256-QUU/D1wsdE4qpKqEF6BDxI7SNr+QCRDpupwVXYMcFC4=" crossorigin="anonymous"></script>',
      dev: '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.0/umd/react.development.js" integrity="sha256-x0FMwQ3maF1IWpNAed7FfR7Dy3HC4KmhYOSkeOs9tbU=" crossorigin="anonymous"></script>'
      global: 'React'
    }
  },
  'react-dom': {
    '16.3.0': {
      prod: '<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.0/cjs/react-dom.production.min.js" integrity="sha256-6oF6aDRVxaxC3XAi182UoxZR2Tbk2r4U3iWoexAvXtc=" crossorigin="anonymous"></script>',
      dev: '<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.0/cjs/react-dom.development.js" integrity="sha256-9NsN3qM3kwD591Heet2pc3WIl1/4x70XT8sDoyus7G4=" crossorigin="anonymous"></script>'
      global: 'ReactDOM'
    }
  },
  'styled-components': {
    '3.2.3': {
      prod: '<script src="https://cdnjs.cloudflare.com/ajax/libs/styled-components/3.2.3/styled-components.min.js" integrity="sha256-7p2Aa6qcrahVPo0sZCeYevLDCuextd4z9OmmKhl9fLM=" crossorigin="anonymous"></script>',
      dev: '<script src="https://cdnjs.cloudflare.com/ajax/libs/styled-components/3.2.3/styled-components.js" integrity="sha256-cnIK9w8YFbD59jZu+66QDMPc1yJLNH92bkbf18gJZ1g=" crossorigin="anonymous"></script>'
      global: 'styled'
    }
  },
  'react-helmet': {
    '5.2.0': {
      prod: '<script src="https://cdn.jsdelivr.net/npm/react-helmet@5.2.0/lib/Helmet.min.js"></script>',
      dev: '<script src="https://cdn.jsdelivr.net/npm/react-helmet@5.2.0/es/Helmet.js"></script>',
      global: 'Helmet'
    }
  }
}

module.exports = (package, version, which) => {
  if (which === 'global') {
    return packages[package][version]['global']
  }
  if (which === 'production') {
    packages[package][version]['prod']
  }
  if (which === 'development') {
    packages[package][version]['dev']
  }
  return ''
}