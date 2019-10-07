'use strict'

const Album = use('App/Models/Album')

class AlbumController {
    async GetAll() {
        const albums = await Album.query().orderBy('id', 'desc').fetch()
        return albums
    }

    async GetOne({ params }) {
        const album = await Album.query().with('songs').where('id', params.id).first()
        return album
    }

    async CreateOne({ request }) {
        const { artist, album } = request.all()
        const newAlbum = new Album();

        newAlbum.name   = album
        newAlbum.artist = artist
        
        await newAlbum.save()
        return newAlbum
    }

    async DeleteOne({ params }) {
        const album = await Album.find(params.id)
        return album.delete()
    }

    async UpdatePhoto({ request, params }) {

        const image = request.file("album_image", {
            types: ["image"],
            size: "2mb"
        })

        await image.move("public/uploads", {
            name: `${ new Date().getTime()}.png`
        })

        const pathImage = `http://localhost:3333/uploads/${image.fileName}`

        const album = await Album.find(params.id)
        album.imagem = pathImage

        await album.save()

        return album
    }
}

module.exports = AlbumController
