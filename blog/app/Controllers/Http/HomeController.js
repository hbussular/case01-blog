'use strict'

const PostModel = use('App/Models/Post')

class HomeController {
    async index ({ view }){
        const allPosts = await PostModel.all()

        return view.render('welcome',{
            posts: allPosts.toJSON()
        })
    }
}

module.exports = HomeController
