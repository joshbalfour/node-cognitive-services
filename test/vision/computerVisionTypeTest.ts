import { computerVision } from "../../src";

let computerVisionClient = new computerVision({ apiKey:"", endpoint:"" });
computerVisionClient.describeImage({
    body:{},
    headers:{"Content-Type":'bad value'}
})

