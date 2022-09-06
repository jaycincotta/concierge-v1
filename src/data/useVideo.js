import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import pick from "../functions/pick"

const getUrl = (video) => video ? video.url : ""

export default function useVideo(task) {
    const { user } = useContext(AppContext)

    const videoLibrary = {
        "Getting Started": [
            {
                step: "1",
                url: "https://vimeo.com/741705223/5ca0983480",
                title: "Jay Tutorial 1",
            },
            {
                step: "2",
                url: "https://vimeo.com/741706003/e3d8e3e09e",
                title: "Jay Tutorial 2"
            },
            {
                step: "Hi",
                url: "https://vimeo.com/741707007/4f8ad9f04e",
                title: "Jay Tutorial 3 Authenticated",
                priority: () => user ? 1 : -1
            },
            {
                step: "Hi",
                url: "https://vimeo.com/741707199/4a0bc9ed43",
                title: "Jay Tutorial 3 Anonymous",
                priority: () => user ? -1 : 1
            },
            {
                step: "4",
                url: "https://vimeo.com/741709927/50f90a416e",
                title: "Jay Tutorial 4"
            }
        ],
        "": [
            {
                step: "1",
                url: "https://vimeo.com/741710210/c85fceae30",
                title: "Jay Home 1"
            }
        ],
        "Request a Quote": [
            {
                step: "A",
                url: "https://vimeo.com/741710210/c85fceae30",
                title: "Jay Home 1"
            },
            {
                step: "B",
                url: "https://vimeo.com/741710210/c85fceae30",
                title: "Jay Home 1"
            },
            {
                step: "C",
                url: "https://vimeo.com/741710210/c85fceae30",
                title: "Jay Home 1"
            }
        ],
        "Contact Us": [
            {
                step: "Warehouses",
                url: "https://vimeo.com/741709927/50f90a416e",
                title: "Jay Home 1"
            }
        ],
        "Login": [
            {
                step: "Login",
                url: "https://vimeo.com/741710210/c85fceae30",
                title: "Jay Home 1"
            }
        ],
        "Account": [
            {
                step: "Sign Out",
                url: "https://vimeo.com/741710210/c85fceae30",
                title: "Jay Home 1"
            }
        ]
    }


    const taskVideos = videoLibrary[task]
    if (!taskVideos) {
        console.log("Unknown task:", task)
        return null;
    }

    const getPriority = (step) => step.priority ? step.priority : 0


    return {
        // Pick a URL from the videos matching the step
        pick: (step) => getUrl(pick(taskVideos
            .filter(video => step === video.step)
            .sort((a,b) => getPriority(a) - getPriority(b)))),

        // Return the data for each video matching the step 
        get: (step) => taskVideos.filter(video => step === video.step),

        // Return the data for all videos matching this task
        all: () => taskVideos.filter(video => task === video.task),

        // Given a list of expected steps, return the missing ones or null if all present
        missing: (steps) => {
            const missingVideos = steps.filter(
                step => !taskVideos.find(
                    video => step === video.step
                )
            )
            return missingVideos.length > 0 ? missingVideos : null
        }
    }
}
