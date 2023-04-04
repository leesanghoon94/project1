경로 : //routes/Jacky

'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return "김찬우 완료"
  })
}