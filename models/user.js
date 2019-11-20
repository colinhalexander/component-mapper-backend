const knex = require('../config/knex')

class User {

  static async find(id) {
    const user = await knex('users').where('id', id)
    return user[0]
  }

  static async findByGitHubID(githubID) {
    const user = await knex('users').where('github_id', githubID)
    return user[0]
  }

  static async create(userObject) {
    const returnVars = ['id', 'username', 'display_name', 'bio', 'email', 'avatar_url']

    const user = await knex('users').insert(userObject, returnVars)
    return user[0]
  }

  static async findOrCreate(userObject) {
    const { id, github_id } = userObject

    let user = id ? await this.find(id) : await this.findByGitHubID(github_id) 

    if (!user) {
      user = await this.create(userObject)
    }

    return user
  }
}

module.exports = User