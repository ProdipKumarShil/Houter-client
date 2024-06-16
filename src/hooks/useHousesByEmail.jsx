import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getUser } from "./getUser"

export const useHousesByEmail = () => {
  const user = getUser()
  return useQuery({
    queryKey: ['housesByEmail', user.email],
    queryFn: async () => {
      const {data} = await axios.get(`https://houter-server.vercel.app/house/houseByEmail/${user.email}`)
      return data
    },
    enabled: !!user.email
  })
}