'use strict'

const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./database.json', 'utf-8'))
data.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SocialMedia', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SocialMedia', data, {})
  }
}
