import { useEffect, useState } from "react";
import { getUser } from "../../../hooks/getUser";
import TableBody from "../TableBody/TableBody";
import axios from "axios";
import { useHousesByEmail } from "../../../hooks/useHousesByEmail";

const DallHouse = () => {
  const {data, isLoading, refetch} = useHousesByEmail()
  if(isLoading) {
    return(
      <span className="loading mt-10 loading-spinner text-h-secondary mx-auto block"></span>
    )
  }
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
};

export default DallHouse;
