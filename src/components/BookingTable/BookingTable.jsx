import axios from 'axios'
import moment from 'moment'
import { getUser } from '../../hooks/getUser'

const BookingTable = ({booking, refetch}) => {
  const {email} = getUser()
  const {checkIn, checkOut, bed, travellers} = booking
  const {name, image, address, bathroom, bedroom, city, availableDate, description, number, roomSize, price} = booking.house
  const handleDeleteHouse = () => {
    axios.delete(`http://localhost:5000/house/deleteBookedHouse?email=${email}&id=${booking._id}`)
      .then(res => {
        console.log(email)
        console.log(res)
        refetch()
      })
  }
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{city}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">
            {moment(checkIn).format("DD MMM, YYYY")}
          </span>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">
            {moment(checkOut).format("DD MMM, YYYY")}
          </span>
        </td>
        <td>{price}$</td>
        <td>{bed}</td>
        <td>{travellers}</td>
        <th>
          <button
            className="btn btn-ghost btn-xs text-red-500"
            onClick={handleDeleteHouse}
          >
            Cancle Booking
          </button>
        </th>
      </tr>
    </>
  )
}

export default BookingTable