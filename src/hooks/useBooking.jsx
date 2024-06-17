import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getUser } from "./getUser"

export const useBooking = () => {
  const user = getUser()
  return useQuery({
    queryKey: ['booking', user?.email],
    queryFn: async () => {
      const {data} = await axios.get(`https://houter-server.vercel.app/house/bookingData/${user?.email}`)
      return data
    },
    enabled: !!user?.email
  })
}