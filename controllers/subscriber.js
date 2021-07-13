const { StatusCodes } = require('http-status-codes');
const Subscriber = require('../models/subscriber');

const listAllSubscrisbers = async (_req, res) => {
  const subscribers = await Subscriber.find({});
  try {
    res.status(StatusCodes.OK).json(subscribers);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

const addNewSubscriber = async (req, res) => {
  const { name, subscribedToChannel } = req.body;
  const createdSubs =  new Subscriber({ name, subscribedToChannel });
  try {
    await createdSubs.save();
    res.status(StatusCodes.CREATED).json({ message: 'Inscrito cadastrado com sucesso' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = {
  listAllSubscrisbers,
  addNewSubscriber,
};