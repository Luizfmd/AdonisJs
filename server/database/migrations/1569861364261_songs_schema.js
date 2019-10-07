'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SongsSchema extends Schema {
  up () {
    this.create('songs', (table) => {
      table.increments()
        table.integer('album_id').unsigned().references('id').inTable('albums')
        table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('songs')
  }
}

module.exports = SongsSchema
