const _ = require('lodash');
const {Group} = require('../models');

module.exports.createUserGroup = async(req, res, next)=>{
  try {
    const {body} = req;

    const values = _.pick(body, ['name','imagePath','description']);

    const group = await Group.create({
      ...values
    })

    //получить юзера
    //и связать с группой
    //с помощью магии


    res.status(201).send({data:group})
  } catch (error) {
    next(error)
  }
}