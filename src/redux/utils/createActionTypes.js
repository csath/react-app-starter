export default (namespace, op = "fetch") => ({
  start: `@${namespace}/${op}/start`,
  success: `@${namespace}/${op}/success`,
  failed: `@${namespace}/${op}/failed`,
})