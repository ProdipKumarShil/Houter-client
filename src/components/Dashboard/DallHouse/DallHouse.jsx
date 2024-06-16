import TableBody from "../TableBody/TableBody";
import { useHousesByEmail } from "../../../hooks/useHousesByEmail";

const DallHouse = () => {
  const { data, isLoading, refetch, error } = useHousesByEmail()
  if (isLoading) {
    return (
      <span className="loading mt-10 loading-spinner text-h-secondary mx-auto block"></span>
    )
  }
  if (data) {
    return (
      <div className="w-full p-4 space-y-3">
        <p className="text-[24px] ">All House </p>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map(house => <TableBody refetch={refetch} house={house} modalId={house._id} key={house._id} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-4xl font-bold ">Data Not Found!</p>
      </div>
    )
  }
};

export default DallHouse;
