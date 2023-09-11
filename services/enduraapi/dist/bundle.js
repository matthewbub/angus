'use strict';

var Fastify = require('fastify');

const fastify = Fastify({
  logger: true
});

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`);
});
