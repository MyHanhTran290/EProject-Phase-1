require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://localhost/orders',
    rabbitMQURI: process.env.RABBITMQ_URI || 'amqp://rabbitmq:5672',
    // rabbitMQURI: 'amqp://localhost',
    rabbitMQQueue: 'orders',
    port: 3002
};
  