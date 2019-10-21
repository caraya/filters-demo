async function startCapture() {
  const myVideo = document.querySelector('#myVideo');
  let stream = null;

  try {
    const stream =
      await navigator.mediaDevices.getUserMedia({video: true});
    myVideo.srcObject = stream;
  } catch(err) {
    console.error("Error: " + err);
  }
  return stream;
}

startCapture();
