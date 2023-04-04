경로 : //routes/Qook

'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return "이용국 완료"
  })
}