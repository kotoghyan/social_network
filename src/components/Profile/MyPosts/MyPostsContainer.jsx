import React from "react";
import MyPosts from "./MyPosts";
import { setPost } from "../../../redux/ProfileReducer/ProfileReducer.ts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
     return {
          profilePage: state.profilePage,
     }
}

     const MyPostsContainer = connect(mapStateToProps, {setPost})(MyPosts)

     export default MyPostsContainer;