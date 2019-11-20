const knex = require('../config/knex')

class User {
  static async findByUsername(username) {
    const user = await knex('users').where('username', username)
    return user[0]
  }

  static async findByGitHubID(githubID) {
    const user = await knex('users').where('github_id', githubID)
    return user[0]
  }

  static async create(userObject) {
    const returnVars = ['id', 'username', 'display_name', 'bio', 'email', 'avatar_url'],
          user = await knex('users').insert(userObject, returnVars)
    
    return user[0]
  }

  static async findOrCreate(userObject) {
    const { github_id } = userObject

    let user = await this.findByGitHubID(github_id) 

    if (!user) {
      user = await this.create(userObject)
    }

    return user
  }

  static async getProjects(userID) {
    const projects = await knex('projects').where('user_id', userID)
    return projects
  }
}

module.exports = User