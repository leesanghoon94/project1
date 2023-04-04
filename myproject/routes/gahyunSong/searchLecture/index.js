'user strict'

module.exports = async function (fastify, opts) {
  fastify.get('/searchLecture/:lecid}', async function (request, reply) {
    const client = await fastify.pg.connect()
    try {
        const { rows } = await client.query(
        'SELECT * WHERE lecid=$1212', [req.params.lecid],
        )
        return rows
    } finally {
        client.release()
    }
    })
}

'user strict'

module.exports = async function (fastify, opts) {
  fastify.get('/lectures/:lecname', async function (request, reply) {
    const client = await fastify.pg.connect()
    try {
        const { rows } = await client.query(
        'SELECT * WHERE lecname=$English', [req.params.lecname],
        )
        return rows
    } finally {
        client.release()
    }
    })
}

'user strict'

module.exports = async function (fastify, opts) {
  fastify.get('/lectures/:profid', async function (request, reply) {
    const client = await fastify.pg.connect()
    try {
        const { rows } = await client.query(
        'SELECT * WHERE profid=$1', [req.params.profid],
        )
        return rows
    } finally {
        client.release()
    }
    })
}