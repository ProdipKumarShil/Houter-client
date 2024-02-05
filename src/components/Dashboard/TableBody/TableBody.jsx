import axios from "axios";
import moment from "moment";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getUser } from "../../../hooks/getUser";

const TableBody = ({ modalId, house, refetch }) => {
  const { register, handleSubmit } = useForm();
  const { _id, name, images, address, price, city, availableDate, bathroom, bedroom, roomSize, number, description } = house;
  console.log(house)
  const user = getUser()
  const handleDeleteHouse = () => {
    axios
      .delete(`http://localhost:5000/house/deleteHouse/${_id}`)
      .then((res) => {
        refetch();
        if (res.data.status) {
          toast.success("House deleted successfully");
        } else {
          toast.error("House deleted failed");
        }
      });
  };

  const handleEdit = (value) => {
    axios.put(`http://localhost:5000/house/editHouse/${_id}`, value)
      .then(res => {
        document.getElementById(`abc${modalId}`).close()
        refetch();
        toast.success('Successfully edited')
      })
      .catch(e => toast.error('Something went wrong'))
  };

  const closeModal = (e) => {
    e.preventDefault()
    document.getElementById(`abc${modalId}`).close()
  }

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={images[0]} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{city}</div>
            </div>
          </div>
        </td>
        <td>
          {address}
          <br />
          <span className="badge badge-ghost badge-sm">
            {moment(availableDate).format("DD MMM, YYYY")}
          </span>
        </td>
        <td>{price}$</td>
        <th>
          <button
            className="btn btn-ghost btn-xs text-h-secondary"
            onClick={() =>
              document.getElementById(`abc${modalId}`).showModal()
            }>
            Edit
          </button>
          <button
            className="btn btn-ghost btn-xs text-red-500"
            onClick={handleDeleteHouse}>
            Delete
          </button>
        </th>
      </tr>
      <dialog id={`abc${modalId}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="">
            <form className="space-y-4" onSubmit={handleSubmit(handleEdit)}>
              {/* if there is a button in form, it will close the modal */}
              <div className="">
                <label className="mb-2">User Name</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="User Name"
                  type="text"
                  defaultValue={user.name}
                  disabled
                />
              </div>
              <div className="">
                <label className="mb-2">User Email</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="User email"
                  type="text"
                  defaultValue={user.email}
                  disabled
                />
              </div>
              <div className="">
                <label className="mb-2">House Name</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="House Name"
                  type="text"
                  defaultValue={name}
                  {...register("name", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">House Price</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="House Price"
                  type="number"
                  defaultValue={price}
                  {...register("price", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">House Address</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="House Address"
                  type="text"
                  defaultValue={address}
                  {...register("address", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">Your City</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="Your City"
                  type="text"
                  defaultValue={city}
                  {...register("city", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">Total Bedroom</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="Total Bedroom"
                  type="number"
                  defaultValue={bedroom}
                  {...register("bedroom", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">Total Bathrooms</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="Total Bathrooms"
                  type="number"
                  defaultValue={bathroom}
                  {...register("bathroom", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">House Room Size</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="House Room Size"
                  type="number"
                  defaultValue={roomSize}
                  {...register("roomSize", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">Rent Per Month</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="Rent Per Month"
                  type="date"
                  defaultValue={moment(availableDate).format('YYYY-MM-DD')}
                  {...register("availableDate", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">Phone Number</label>
                <input
                  className="border border-my-secondary p-3 rounded-lg w-full input-sm"
                  placeholder="Phone Number"
                  type="number"
                  defaultValue={number}
                  {...register("number", { required: true })}
                />
              </div>
              <div className="">
                <label htmlFor="">Description</label>
                <textarea
                  className="border border-my-secondary p-3 rounded-lg w-full "
                  placeholder="Description"
                  type="text"
                  defaultValue={description}
                  {...register("description", { required: true })}
                />
              </div>
              <button className='hover:text-white hover:bg-h-primary duration-75 text-h-primary border border-h-primary active:scale-95  py-3 rounded-lg w-full font-bold' type="submit">Submit</button>
              <button className='block text-center bg-h-secondary active:scale-95 text-white py-3 rounded-lg w-full font-bold' onClick={closeModal}>Close</button>
            </form>
            {/* <form action="">
            </form> */}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TableBody;
