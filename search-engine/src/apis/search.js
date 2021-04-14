import request from "./request";
const IMAGE_API = process.env.VUE_APP_IMAGE_API;
const searchImage = ({ file, pageNumber = 1, pageSize = 20 }) => {
  return requset({
    url: `${IMAGE_API}/searchImage`,
    methods: "post",
    data: {
      file,
      pageSize,
      pageNumber,
    },
  });
};

const searchAudio = ({ keyword }) => {
  //todo
};

const searchVideo = ({ keyword }) => {
  //todo
};


export default{
    searchImage
}