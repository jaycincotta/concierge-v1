import pick from "../functions/pick"

const videoLibrary = {
    "Getting Started": [
        {
            subtask: "1",
            url: "https://vimeo.com/741705223/5ca0983480",
            title: "Jay Tutorial 1",
        },
        {
            subtask: "2",
            url: "https://vimeo.com/741706003/e3d8e3e09e",
            title: "Jay Tutorial 2"
        },
        {
            subtask: "3",
            url: "https://vimeo.com/741707007/4f8ad9f04e",
            title: "Jay Tutorial 3 Authenticated"
        },
        {
            subtask: "3",
            url: "https://vimeo.com/741707199/4a0bc9ed43",
            title: "Jay Tutorial 3 Anonymous"
        },
        {
            subtask: "4",
            url: "https://vimeo.com/741709927/50f90a416e",
            title: "Jay Tutorial 4"
        }
    ],
    "Main Menu": [
        {
            subtask: "1",
            url: "https://vimeo.com/741710210/c85fceae30",
            title: "Jay Home 1"
        }
    ]
}

const getUrl = (video) => video ? video.url : ""

export default function useVideo(task) {
    const videos = videoLibrary[task]
    if (!videos) {
        console.log("Unknown task:", task)
        return null;
    }
    
    return {
        // Get the URL for the first video matching the subtask
        find: (subtask) => getUrl(videos.find(video => subtask === video.subtask)),

        // Pick a URL from the videos matching the subtask
        pick: (subtask) => getUrl(pick(videos.filter(video => subtask === video.subtask))),

        // Return the data for each video matching the subtask 
        get: (subtask) => videos.filter(video => subtask === video.subtask),

        // Return the data for all videos matching this task
        all: () => videos.filter(video => task === video.task),

        // Given a list of expected subtasks, return the missing ones or null if all present
        missing: (subtasks) => {
            const missingVideos = subtasks.filter(
                subtask => !videos.find(
                    video => subtask === video.subtask
                )
            )
            return missingVideos.length > 0 ? missingVideos : null
        }
    }
}
