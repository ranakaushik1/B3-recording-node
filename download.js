const exec = require("child_process").exec;


function exportRecording() {
  console.log(
    `node export.js "https://meet5.scoutlive.in/playback/presentation/2.0/playback.html?meetingId=9cdfe0c61d329282ea038bb3be48d3f46271baa0-1598332811537" 9cdfe0c61d329282ea038bb3be48d3f46271baa0-1598332811537.webm 0 true local`
  );
  const myShellScript = exec(
    `node export.js "https://meet5.scoutlive.in/playback/presentation/2.0/playback.html?meetingId=9cdfe0c61d329282ea038bb3be48d3f46271baa0-1598332811537" 9cdfe0c61d329282ea038bb3be48d3f46271baa0-1598332811537.webm 0 true local`
  );

  myShellScript.stdout.on("data", (data) => {
    console.log(data);
    if (data.search("File uploaded successfully") > -1) {
      console.log("done");
    }
  });
  myShellScript.stderr.on("data", (data) => {
    console.error(data);
  });
}
exportRecording();