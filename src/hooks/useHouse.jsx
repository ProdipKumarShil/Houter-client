import { useQuery } from "@tanstack/react-query"
import axios from "axios"
 
export const useHouse = () => {
  return useQuery({
    queryKey: ['houses'],
    queryFn: async () => {
      const {data} = await axios.get('https://houter-server.vercel.app/house/allHouse')
      return data
    }
  })
}