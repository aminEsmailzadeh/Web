
const video = document.querySelector('video');



function startVideo()
{
//**************************************** read Camera ******************************************************************** */
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: false, video: { width: 1280, height: 720 } };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  {video : {} }
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

//*************************************** read Camera ******************************************************************** */
}

startVideo();

// Promise.all([

//   1,
//   2,
//   4
//   // faceapi.nets.faceLandmark68TinyModelShard1.loadFromUri("faceAlgo/weights/face_landmark_68_tiny_model-shard1"),
//   // faceapi.nets.faceLandmark68ModelShard1.loadFromUri("faceAlgo/weights/face_landmark_68_model-shard1"),
//   // faceapi.nets.faceRecognitionModelShard1.loadFromUri("faceAlgo/face_recognition_model-weights_manifest"),
//   // faceapi.nets.faceExpressionModelShard1.loadFromUri("faceAlgo/face_landmark_68_tiny_model-weights_manifest")
// ]).startVideo()


video.addEventListener('play',()=>{
  console.log('video is running');
})
