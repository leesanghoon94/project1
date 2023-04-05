'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      fastify.pg.connect()
      const client = await fastify.pg.connect();
      const { rows } = await client.query('SELECT * FROM registration');
      client.release();
      return rows;
      }),
    fastify.delete('/:id', async function (request, reply) {
        fastify.pg.connect()
        const client = await fastify.pg.connect();
        const { rows } = await client.query(`DELETE FROM registration WHERE id='${request.params.id}'`);
        client.release();
        return rows;
        })
}
   