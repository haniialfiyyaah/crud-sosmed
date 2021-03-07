const { SocialMedia } = require('../models')

class ApplicationController {
  static async findAll(req, res, next) {
    try {
      const applications = await SocialMedia.findAll()
      res.status(200).json(applications)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static async findOne(req, res, next) {
    try {
      const application = await SocialMedia.findByPk(+req.params.id)
      application
        ? res.status(200).json(application)
        : res.status(404).json({ message: 'Not Found' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static async insert(req, res, next) {
    try {
      const { name, information, total_users, founder, date_founded } = req.body
      const newApplication = await SocialMedia.create({
        name,
        information,
        total_users: +total_users,
        founder,
        date_founded: new Date(date_founded)
      })
      res.status(201).json(newApplication)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static async update(req, res, next) {
    try {
      const { name, information, total_users, founder, date_founded } = req.body
      const returnData = await SocialMedia.update(
        {
          name,
          information,
          total_users: +total_users,
          founder,
          date_founded: new Date(date_founded)
        },
        {
          where: { id: +req.params.id },
          returning: true
        }
      )
      !returnData[1][0]
        ? res.status(404).json({ message: 'Not Found' })
        : res.status(200).json(returnData[1][0])
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static async delete(req, res, next) {
    try {
      const deleted = await SocialMedia.destroy({
        where: { id: +req.params.id },
        returning: true
      })
      deleted
        ? res.status(200).json({ message: 'Delete Succced!' })
        : res.status(404).json({ message: 'Not Found' })
    } catch (err) {}
  }

  static async findByFounder(req, res, next) {
    try {
      const application = await SocialMedia.findOne({
        where: { founder: +req.query.pendiri }
      })
      application
        ? res.status(200).json(application)
        : res.status(404).json({ message: 'Not Found' })
    } catch (err) {}
  }
}

module.exports = ApplicationController
