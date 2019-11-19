const knex = require('../config/knex')

class User {

  static async find(githubID) {
    const user = await knex('users').where('github_id', githubID)
    return user
  }

  static async create(userObject) {
    const user = await knex('users').insert(userObject)
    return user
  }

  static async findOrCreate(userObject) {
    const { id } = userObject

    let user = await this.find(id)

    if (!user) {
      user = await this.create(userObject)
    }

    console.log(user)
  }
}

module.exports = User