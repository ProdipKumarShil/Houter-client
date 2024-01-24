import TableBody from "../TableBody/TableBody"

const Dbooking = () => {
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
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <TableBody modalId={123}/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dbooking