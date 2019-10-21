async function startCapture() {
  const myVideo = document.querySelector('#myVideo');
  let captureStream = null;

  try {
    const captureStream =
      await navigator.mediaDevices.getDisplayMedia({video: true});
    myVideo.srcObject = captureStream;
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}

startCapture();
