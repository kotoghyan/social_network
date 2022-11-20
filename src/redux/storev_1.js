// mapStateProps import dialogsReducer from "./DialogsReducer";
// import profileReducer from "./ProfileReducer";
// import siteBarReducer from "./siteBarReducer"
//
//
// const store = {
//
//   _state: {
//     profilePage: {
//       myPostsData: [
//         {
//           id: 1,
//           message: 'its only my posts', LikesCount: 15, img: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"
//         },
//
//         { id: 2, message: 'only me typing there', LikesCount: 20, img: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" },
//       ],
//       newPostText: ``
//     },
//     messagesPage: {
//       messages: [
//         { id: 1, text: 'Hi' },
//         { id: 2, text: 'How are you?' },
//         { id: 3, text: 'Thx, i am fine' },
//       ],
//       dialogsData: [
//         { id: 1, name: 'Andranik', ava: 'UI_UX/Avatar/Andranik.png' },
//         { id: 2, name: 'Hakob', ava: 'UI_UX/Avatar/Hakob.png' },
//         { id: 3, name: 'Hayko', ava: 'UI_UX/Avatar/Hayko.png' },
//         { id: 4, name: 'Harut', ava: 'UI_UX/Avatar/Harut.png' },
//       ],
//       newMessageText: ''
//     },
//     siteBar: {
//       friends: [
//         { id: 1, name: 'Andranik', avatar: 'UI_UX/Avatar/Andranik.png' },
//         { id: 2, name: 'Hakob', avatar: 'UI_UX/Avatar/Hakob.png' },
//         { id: 3, name: 'Hayko', avatar: 'UI_UX/Avatar/Hayko.png' },
//       ]
//     },
//   },
//   _callSubscriber() {
//
//     console.log("State changed");
//   },
//   getState() {
//     return this._state
//   },
//
//   subscribe(observer) {
//
//     this._callSubscriber = observer
//
//   },
//   generateNextId(arr) {
//
//     return arr[arr.length - 1].id + 1;
//   },
//
//   _addMessage(message) {
//
//     if (this._state.messagesPage.newMessageText !== '') {
//       let newMessage = {
//         id: this.generateNextId(message),
//         text: this._state.messagesPage.newMessageText,
//       }
//       message.push(newMessage);
//       this._state.messagesPage.newMessageText = '';
//       this._callSubscriber(this._state);
//     }
//   },
//   _updateMessageText(text) {
//     this._state.messagesPage.newMessageText = text;
//     this._callSubscriber(this._state)
//   },
//   _addPost(posts) {
//     if (this._state.profilePage.newPostText !== '') {
//
//       let newPost = {
//         id:this.generateNextId(posts) ,
//         message: this._state.profilePage.newPostText,
//         LikesCount: 0,
//         img: "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
//       }
//       posts.push(newPost);
//       this._state.profilePage.newPostText = '';
//       this._callSubscriber(this._state);
//
//     }
//   },
//
//   _updatePostText(text) {
//     this._state.profilePage.newPostText = text;
//     this._callSubscriber(this._state)
//   },
//
//   dispatch(action) {
//
//     profileReducer(store.getState().profilePage, action, store);  // this@  hence dispatch funkciana, xi?
//     dialogsReducer(store.getState().messagesPage, action, store)
//     siteBarReducer(store.getState().siteBar, action)
//   },
//
// }
//
//
//
//
// window.store = store;
//
//
//
// export default store