import { useBooking } from "../../../hooks/useBooking"
import BookingTable from "../../BookingTable/BookingTable"

const Dbooking = () => {
  const { data, error, isLoading, refetch } = useBooking()
  
  return (
    <div className="w-full p-4 space-y-3">
      <p className="text-[24px] ">Booking House </p>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Price</th>
              <th>Bed</th>
              <th>Travellers</th>
              <th>Cancle Booking</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data?.map((booking) => <BookingTable key={booking._id} booking={booking} refetch={refetch}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dbooking