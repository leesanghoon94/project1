'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    fastify.pg.connect()
    const client = await fastify.pg.connect();
    const { rows } = await client.query('SELECT * FROM lectures');
    client.release();
    return rows;
  })

  fastify.get('/:lecid', async function (request, reply) {
    fastify.pg.connect()
      const client = await fastify.pg.connect();
      const { rows } = await client.query(`SELECT * FROM lectures WHERE lecid='${request.params.lecid}'`);
      client.release();
      console.log("-------------------------------");
      console.log(rows);
      return rows;
  })
  
  fastify.get('/:profid', async function (request, reply) {
    fastify.pg.connect()
      const client = await fastify.pg.connect();
      const { rows } = await client.query(`SELECT * FROM lectures WHERE profid='${request.params.profid}'`);
      client.release();
      console.log("-------------------------------");
      console.log(rows);
      return rows;
  })

  fastify.get('/:lecname', async function (request, reply) {
    fastify.pg.connect()
      const client = await fastify.pg.connect();
      const { rows } = await client.query(`SELECT * FROM lectures WHERE lecname='${request.params.lecname}'`);
      client.release();
      console.log("-------------------------------");
      console.log(rows);
      return rows;
  })
}