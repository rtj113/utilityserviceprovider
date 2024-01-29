import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
    accessToken: process.env.storyBlokKey13,
    use: [apiPlugin],
    apiOptions: {
        region: "us",
    },
});