'use strict'

module.exports = async function (fastify, opts) {
    fastify.post('/', async (req, reply) => {
        const client = await fastify.pg.connect()
        try {
            const { profid, lecname, day } = req.body
            const { rows } = await client.query(
            'INSERT INTO public.lectures (profid,lecname, day) VALUES ($1, $2, $3) RETURNING *',[profid,lecname, day]
            )
            
            reply.code(201).send(rows)
        } finally {
            client.release()
        }
        })
    }