// 1. Google cloud storage interactions
// 2. Local file interactions

import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const storage = new Storage();

const rawVideoBucketName = "jxmes-yt-raw-videos";
const processedVideoBucketName = "jxmes-yt-processed-videos";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./processed-videos";

/**
 * Creates the local directories for raw and processed videos.
 */
export function setupDirectories() {

}

/**
 * @param rawVideoName - The name of the file to convert from {@link localRawVideoPath}.
 * @param processedVideoName - The name of the file to convert to {@link localProcessedVideoPath}.
 * @returns A promise that resolves when the video has been converted.
 */
export function convertVideo(rawVideoName: string, processedVideoName: string) {
    ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
        .outputOptions("-vf", "scale =-1:360") // 360p
        .on("end", () => {
            console.log("Processing finished successfully.")
        })
        .on("error", (err) => {
            console.log(`An error occurred: ${err.message}`)
        })
        .save(`${localProcessedVideoPath}/${processedVideoName}`);
}