<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components: {BlogPost},
  data(){
    return{
      welcomeScreen:{
        title: "Welcome",
        BlogPost: "Register to create BlogMarket",
        welcomeScreen: true,
        photo: "coding",

      },
      sampleBlogPost:[
        {
          title: "test 1",
          blogHTML: "test test",
          blogCoverPhoto: "beautiful-stories",
      },
      {
          title: "test 2",
          blogHTML: "test test test",
          blogCoverPhoto: "designed-for-everyone",
      },
      ],
    };
  },

};
</script>
