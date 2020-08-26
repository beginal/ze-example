export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'Junho'
    },
    content: "첫번째 게시물입니다. #블라블라 #헤헤",
    Images: [
      {
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5358%2F2020%2F05%2F20%2F0000277551_001_20200520101205744.jpg&type=sc960_832"
      },
      {
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2020_05_24_1051%2F2eaeb192-9d70-11ea-a4a6-48df379cc9e4_03.jpg&type=sc960_832"
      },
      {
        src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5277%2F2020%2F05%2F20%2F0000240271_001_20200520212507306.jpg&type=sc960_832"
      }
    ],
    Comments: [
      {
        id: 1,
        nickname: "Junho",
        content: '좋아용'
      }
    ]
  }],
  imagePaths: [],
  postAdded: false,
}

const dummyData = {
  id: 2,
  User: {
    id: 1,
    nickname: 'Junho'
  },
  content: "두번째 게시글입니다.",
  Images: [

  ],
  Comments: [
    {
      id: 1,
      nickname: "Junho",
      content: '헤헤'
    }
  ]
}

const ADD_POST = 'ADD_POST';
const ADD_COMMENT = 'ADD_COMMENT';

export const addedPosted = {
  type: ADD_POST
}

export const addedCommented = {
  type: ADD_COMMENT
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        mainPosts: [dummyData, ...state.mainPosts]
      }
    case ADD_COMMENT:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default PostReducer;