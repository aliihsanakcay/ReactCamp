import axios from 'axios';

const getData = async (userId) => {
    try {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
        const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);   
        console.log({user, posts});
    } catch (error) {
        console.log(error);
    }
}

export {getData};