export interface TNotification {
    status: "success" | "warning" | "error"
    message: string
    duration: number
  }