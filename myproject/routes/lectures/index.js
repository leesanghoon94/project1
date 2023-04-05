'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const client = await fastify.pg.connect()
    let qKey = Object.keys(request.query)
    let queryk = ''

    if(qKey == 'profid'){
      queryk = request.query.profid
      try {
        const { rows } = await client.query('SELECT * FROM public.lectures WHERE profid =' + queryk)

        reply.code(200).send(rows)
      } finally {
        client.release()
      }
    } else if (qKey == 'lecid'){
      queryk = request.query.lecid
      try {
        const { rows } = await client.query('SELECT * FROM public.lectures WHERE lecid =' + queryk)

        reply.code(200).send(rows)
      } finally {
        client.release()
      }
    } else if (qKey == 'lecname'){
      queryk = request.query.lecname
      try {
        const { rows } = await client.query(`SELECT * FROM public.lectures WHERE lecname ='${queryk}'`)

        reply.code(200).send(rows)
      } finally {
        client.release()
      }
    } else if (qKey == 'day'){
      queryk = request.query.day
      try {
        const { rows } = await client.query(`SELECT * FROM public.lectures WHERE day ='${queryk}'`)

        reply.code(200).send(rows)
      } finally {
        client.release()
      }
    } else {
        try {
          const { rows } = await client.query('SELECT * FROM public.lectures')

          reply.code(200).send(rows)
        } finally {
          client.release()
        }
      }
  })
}

// 'use strict'

// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply){
//     fastify.pg.connect()
//     let qKey = Object.keys(request.query)
//     let queryk =''
//     console.log(qKey)
//     console.log(qKey)
//     if(qKey == 'profid'){
//       queryk = request.query.profid
//       try {
//         const { rows } = await client.query('SELECT * FROM public.lectures WHERE profid =' + queryk)
        
//         reply.code(200).send(rows)
//     } finally {
//         client.release()
//     }
//     } else if (qKey == 'lecid'){
//       queryk = request.query.lecid
//       try {
//         const { rows } = await client.query('SELECT * FROM public.lectures WHERE lecid =' + queryk)
        
//         reply.code(200).send(rows)
//     } finally {
//         client.release()
//     }
//     } else if (qKey == 'lecname'){
//       queryk = request.query.lecname
//       try {
//         const { rows } = await client.query('SELECT * FROM public.lectures WHERE lecname =' + queryk)
        
//         reply.code(200).send(rows)
//     } finally {
//         client.release()
//     }
//     } else {
//       try {
//         const { rows } = await client.query('SELECT * FROM public.lectures')
        
//         reply.code(200).send(rows)
//     } finally {
//         client.release()
//     }
//     }
//   })
// }

// // module.exports = async function (fastify, opts) {
// //     fastify.get('/:lecid', async function (request, reply) {
// //       fastify.pg.connect()
// //       const client = await fastify.pg.connect();
// //       const { rows } = await client.query(`SELECT * FROM lectures WHERE lecid='${request.params.lecid}'`);
// //       client.release();
// //       console.log("-------------------------------");
// //       console.log(rows);
// //       return rows;
// //       })
// //   }

// //   module.exports = async function (fastify, opts) {
// //     fastify.get('/:profid', async function (request, reply) {
// //       fastify.pg.connect()
// //       const client = await fastify.pg.connect();
// //       const { rows } = await client.query(`SELECT * FROM lectures WHERE profid='${request.params.profid}'`);
// //       client.release();
// //       console.log("-------------------------------");
// //       console.log(rows);
// //       return rows;
// //       })
// //   }

// //   module.exports = async function (fastify, opts) {
// //     fastify.get('/:lecname', async function (request, reply) {
// //       fastify.pg.connect()
// //       const client = await fastify.pg.connect();
// //       const { rows } = await client.query(`SELECT * FROM lectures WHERE lecname='${request.params.lecname}'`);
// //       client.release();
// //       console.log("-------------------------------");
// //       console.log(rows);
// //       return rows;
// //       })
// //   }