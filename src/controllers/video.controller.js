
const Jimp = require("jimp");
const fs = require("fs-extra");
const util = require("util");
const path = require('path');
export const transformPost = async (req,res) =>{

    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let sampleFile = req.files.video;
    
      // Use the mv() method to place the file somewhere on your server
      sampleFile.mv(path.join(__dirname+'/../../public/files/2/')+sampleFile.name, function(err) {
        if(err){

            res.status(404).json(err);

        }else{

            Compress(sampleFile.name)

            
                

        }

      });



}

export const TransformVideo = (req,res) =>{


    
}

async function Compress(video){

                const exec = util.promisify(require("child_process").exec);

                const debug = false;
                const videoEncoder = "h264"; // mpeg4 libvpx
                const input = path.join(__dirname+'/../../public/files/2/')+video;
                const output = path.join(__dirname+'/../../public/files/2/')+"opt"+video;

               await exec(`ffmpeg -i ${input} -r 30 -s 960x540 ${output}`);


}

async function onFrame(frame, frameCount) {

    if (frameCount < 5) {

        frame = new Jimp(frame.bitmap.width, frame.bitmap.height, 0xff0000ff, (err, image) => { });

    } else {

        // Add text
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        frame.print(font, 0, 0, `Frame Count: ${frameCount}`);

        // Manual manipulation
        frame.scan(0, 0, frame.bitmap.width, frame.bitmap.height, function (x, y, idx) {

            // Get the colors
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];
            const alpha = this.bitmap.data[idx + 3];

            // If x is less than y
            if (x < y) {

                // Set the blue channel to 255
                this.bitmap.data[idx + 2] = 255;

            }

        });

    }

    return frame;
}