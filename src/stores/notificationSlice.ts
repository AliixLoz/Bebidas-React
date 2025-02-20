import { StateCreator } from "zustand"
import Notification from "../components/Notification"
import { FavoritesSliceType } from "./favoritesSlice"

type Notification = {
    text: String
    show: boolean
    error: boolean
}

export type NotificacionSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    closeNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificacionSliceType & FavoritesSliceType, [], [], NotificacionSliceType> = (set, get) => ({
    notification: {
        text:'',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().closeNotification()
        }, 3000)
    },
    closeNotification: () => {
        set({
            notification: {
                text: '',
                show: false,
                error: false
            }
        })
    }
})


