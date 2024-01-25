import { useQuery } from "@tanstack/react-query"
import axios from "axios"
 
export const useHouse = () => {
  return useQuery({
    queryKey: ['houses'],
    queryFn: async () => {
      const {data} = await axios.get('http://localhost:5000/house/allHouse')
      return data
    }
  })
}