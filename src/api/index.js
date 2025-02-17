import axios from 'axios'
const API = axios.create({ baseURL : `https://utube-soul-backend.onrender.com` });  
//baseURL is valid for Axios but baseUrl is configuration correct but not working
API.interceptors.request.use(req=>{
    if(localStorage.getItem("Profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`;
    }
    return req;
});

// for user login authentication through email 
export const login=(authData)=>API.post("/user/login",authData);

export const updateChanelData=(id,updateData)=> API.patch(`/user/update/${id}`, updateData);

export const fetchAllChanel=()=>API.get("/user/getAllChanels");

export const uploadVideo=(fileData, fileOptions)=>API.post("/video/uploadVideo", fileData, fileOptions);

export const getVideos=()=>API.get('/video/getvideos')

//
export const likeVideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});
export const viewsVideo=(id)=>API.patch(`/video/view/${id}`);


export const addToLikedVideo=(likedVideoData)=>API.post('/video/likeVideo',likedVideoData)
// Api for get liked video
export const getAlllikedVideo=()=>API.get('/video/getAlllikeVideo')
export const deletelikedVideo=(videoId,Viewer)=>API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`)
// Api for get watchlater video after after add
export const addTowatchLater=(watchLaterData)=>API.post('/video/watchLater',watchLaterData)
export const getAllwatchLater=()=>API.get('/video/getAllwatchLater');
export const deletewatchLater=(videoId,Viewer)=>API.delete(`/video/deletewatchLater/${videoId}/${Viewer}`)

export const addToHistory=(HistoryData)=>API.post('/video/History', HistoryData)
export const getAllHistory=()=>API.get('/video/getAllHistory')
export const clearHistory=(userId)=>API.delete(`/video/clearHistory/${userId}`)

export const postComment=(CommentData)=>API.post('/comment/post',CommentData)
export const deleteComment=(id)=>API.delete(`/comment/delete/${id}`)
export const editComment=(id,commentBody)=>API.patch(`/comment/edit${id}`,{commentBody})
export const getAllComment=()=>API.get('/comment/get')


