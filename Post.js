require('dotenv').config()
const Logic = require("./Logic")

exports.createPost = async (post_id, tags, text) => {
    const payload =
        `mutation createPosts {
            createPosts(data: { `+
            `post_id: ` + post_id + `, ` +
            `user_id: ` + user_id + `, ` +
            `created_time: ` + created_time + `, ` +
            `location: ` + location + `, ` +
            `people_in_post: ` + people_in_post + `, ` +
        `}) {
                post_id
                user_id
                created_time
                location
                people_in_post
            }
        }`
    return await Logic.executeQuery(payload);
}

exports.getAllPosts = async () => {
    const payload = 
        `query FindAllPosts {
            allPosts {
                data {
                    post_id
                    user_id
                    created_time
                    location
                    people_in_post
                }
            }
        }`
    return await Logic.executeQuery(payload);
}

exports.scrapePosts = async (username, depth) => {
    const user = await Logic.scrapeInstagramUser(username);


    console.log(user.edge_owner_to_timeline_media.edges.length)
    if(depth === undefined) {
        //depth = post.length
    }
    //save posts

}



// method doesn't work after refractoring database
//
//
// exports.getPostByTag = async (tag) => {
//     try {
//         const response = await Axios({
//             url: process.env.DB_URL,
//             method: 'post',
//             headers: { "Authorization": "Bearer " + process.env.BEARER_TOKEN },
//             data: {
//                 query:     
//                     `query FindPostsByTag {
//                         postsByTag(tags: \"`+ tag + `\") {
//                             data {
//                                 id
//                                 text
//                         }
//                     }
//                 }`
//             }
//         })
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }