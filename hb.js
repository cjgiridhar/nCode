var hbjs = require("handbrake-js");

hbjs.spawn({ input: "sample.mp4", output: "sample.m4v" })
  .on("error", function(err){
    console.log(err);
  })
  .on("progress", function(progress){
    console.log(
      "Percent complete: %s, ETA: %s", 
      progress.percentComplete, 
      progress.eta
    );
  })
  .on("complete", function(success){
   console.log(
     "Transcode complete"
   );
  });
