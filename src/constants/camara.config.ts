import { CameraOptions, Camera } from "@ionic-native/camera";

const camera = new Camera();

export const CAMERA_OPTIONS: CameraOptions = {
    quality: 20,
    destinationType: camera.DestinationType.DATA_URL,
    encodingType: camera.EncodingType.JPEG,
    mediaType: camera.MediaType.PICTURE,
    targetWidth: 720,
    correctOrientation: true,
}