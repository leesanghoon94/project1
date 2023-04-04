'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const client = await fastify.pg.connect()
      
    console.log(client);
        try {
            const { rows } = await client.query(
            'SELECT * FROM public.article'
            )
            console.log(rows,'asdadadsasasasadasddddddasasdasdsaasdasdasdasdsadasdasasd');
            reply.code(200).send(rows)
        } finally {
            client.release()
        }
    })
}
