const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.onCreatePage = ({ page, actions }) => {
  const { createRedirect } = actions

  console.log('GATSBY GEN')
  if(!page.path.includes('.html') && page.path !== '/') {
    createRedirect({ fromPath: `${page.path}/`, toPath: page.path, isPermanent: true })
  }
}

exports.createPages = async ({ pages, actions  }) => {
  const { createPage, createRedirect } = actions
  // ...
  pages.forEach(page => {
    // ...
    createRedirect({ fromPath: `${page.path}/`, toPath: page.path, isPermanent: true })
  })
}
