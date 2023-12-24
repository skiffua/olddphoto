const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.onCreatePage = ({ page, actions }) => {
  const { createRedirect } = actions
  if(!page.path.includes('.html') && page.path !== '/') {
    createRedirect({ fromPath: `${page.path}/`, toPath: page.path, isPermanent: true })
  }
}
