import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { AuthContext } from "../context/AuthContext"
import videoLibrary from "./videoLibrary.json"


const getUrl = (video) => video ? video.url : ""

export default function useVideo(task) {
    const { playCount } = useContext(AppContext)
    const { email } = useContext(AuthContext)

    const taskVideos = videoLibrary[task] ? videoLibrary[task] : []

    if (taskVideos.length === 0) {
        console.log("Unknown task:", task)
    }

    const roundRobin = (task, step, candidates) => {
        const count = playCount(task, step)
        const index = count ? count % candidates.length : 0
        return candidates[index]
    }

    const eligible = (video) => {
        if (video.authenticated && !email) return false
        if (video.authenticated === false && email) return false
        return true
    }

    return {
        // pick a video among the eligible candidates 
        pick: (step) => {
            const videos = taskVideos
                .filter(video => step === video.step && eligible(video))

            switch (videos.length) {
                case 0:
                    console.log("Could not find any video for", step, task)
                    return ""
                case 1:
                    return getUrl(videos[0])
                default:
                    return getUrl(roundRobin(task, step, videos))
            }
        },

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
