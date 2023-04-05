'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      const client = await fastify.pg.connect()
      let qKey = Object.keys(request.query)
      let queryk = ''

      if(qKey == 'stid'){
        queryk = request.query.stid
        try {
          const { rows } = await client.query('SELECT * FROM public.registration WHERE stid =' + queryk)

          reply.code(200).send(rows)
        } finally {
          client.release()
        }
      } else {
          try {
            const { rows } = await client.query('SELECT * FROM public.registration')

            reply.code(200).send(rows)
          } finally {
            client.release()
          }
        }
    }),
    fastify.delete('/:id', async function (request, reply) {
        fastify.pg.connect()
        const client = await fastify.pg.connect();
        const { rows } = await client.query(`DELETE FROM registration WHERE id='${request.params.id}'`);
        client.release();
        reply.code(200).send("Delete complete")
        })
}
   