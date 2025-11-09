import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'https://swaggerui-lfxb.onrender.com/api'
};

const outputFile = './swagger-output.json';
const routes = ['./Routes/user.route.js'];
swaggerAutogen()(outputFile, routes, doc);