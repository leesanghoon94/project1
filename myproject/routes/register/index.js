module.exports = async function (fastify, opts) {
    fastify.post('/', async (req, reply) => {
        const client = await fastify.pg.connect()
        try {
            const { stid, lecid } = req.body
            const { rows } = await client.query(
            'INSERT INTO public.registration (stid, lecid) VALUES ($1, $2) RETURNING *',[stid, lecid]
            )
            
            reply.code(201).send(rows)
        } finally {
            client.release()
        }
        })
    }