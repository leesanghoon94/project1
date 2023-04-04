'use strict'

module.exports = async function (fastify, opts) {
    fastify.post('/', async (req, reply) => {
        const client = await fastify.pg.connect()
        try {
            const { lecname, day } = req.body
            const { rows } = await client.query(
            'INSERT INTO public.lectures (lecname, day) VALUES ($1, $2) RETURNING *',[lecname, day]
            )
            
            reply.code(201).send(rows)
        } finally {
            client.release()
        }
        })
    }