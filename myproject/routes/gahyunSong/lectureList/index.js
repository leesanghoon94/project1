'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/lectureList', async function (request, reply) {
    fastify.pg.connect()
    const client = await fastify.pg.connect();
    const { rows } = await client.query('SELECT * FROM lectures');
    client.release();
    return rows;

    })
}