import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getUser } from "../../../hooks/getUser";
import { useState } from "react";

// const DaddHouse = () => {
//   const [images, setImages] = useState([])

//   const handleImageChange = (e) => {
//     const files = e.target.files;
//     setImages([...images, ...files])
//   }

//   const handleUpload = async() => {
//     const formData = new FormData()
//     images.forEach(image => {
//       formData.append('images', image)
//     })

//     try{
//       const response = await axios.post('http://localhost:5000/house/addHouse', formData)
//       console.log(response.data)
//     } catch (error) {
//       console.error("Error uploading images: ", error)
//     }
//   }

//   return(
//     <div className="">
//       <input type="file" multiple onChange={handleImageChange} />
//       <button onClick={handleUpload}>Upload Images</button>
//     </div>
//   )
// }

const DaddHouse = () => {
  const { register, handleSubmit, reset } = useForm();
  const user = getUser();

  const handleHouse = async (value) => {
    const formData = new FormData();
    for (let i = 0; i < value.images.length; i++) {
      formData.append("images", value.images[i]);
    }
    const houseData = {
      name: value.name,
      price: value.price,
      address: value.address,
      bathroom: value.bathroom,
      bedroom: value.bedroom,
      city: value.city,
      availableDate: value.availableDate,
      description: value.description,
      number: value.number,
      roomSize: value.roomSize,
      user: user,
    };
    formData.append("houseData", JSON.stringify(houseData));
    axios
      .post("https://houter-server.vercel.app/house/addHouse", formData)
      .then((res) => {
        toast.success("House added successfully");
        reset();
      })
      .catch((e) => {
        toast.error("Something went wrong!!");
      });
  };

  // const handleHouse = (value) => {
  //   const formData = new FormData();
  //   formData.append("image", value.img[0]);
  //   console.log(formData);
  //   axios
  //     .post(
  //       `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
  //       formData
  //     )
  //     .then((res) => {
  //       const house = {
  //         name: value.name,
  //         price: value.price,
  //         address: value.address,
  //         bathroom: value.bathroom,
  //         bedroom: value.bedroom,
  //         city: value.city,
  //         availableDate: value.availableDate,
  //         description: value.description,
  //         img: [res.data.data.url],
  //         number: value.number,
  //         roomSize: value.roomSize,
  //         user: user,
  //       };
  //       console.log(house)
  //       axios
  //         .post("https://houter-server.vercel.app/house/addHouse", house)
  //         .then((res) => {
  //           toast.success("House added successfully");
  //           reset()
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //           toast.error("Something went wrong!!");
  //         });
  //     });
  // };

  return (
    <form onSubmit={handleSubmit(handleHouse)} className="w-full p-4 space-y-3">
      <p className="text-[24px] ">Add House Here</p>
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Name"
        type="text"
        {...register("name", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Price"
        type="number"
        {...register("price", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Address"
        type="text"
        {...register("address", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Your City"
        type="text"
        {...register("city", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Total Bedroom"
        type="number"
        {...register("bedroom", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Total Bathrooms"
        type="number"
        {...register("bathroom", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Room Size"
        type="number"
        {...register("roomSize", { required: true })}
      />
      {/* <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Picture"
        type="text"
        {...register('img', { required: true})}
      /> */}
      <input
        type="file"
        {...register("images", { required: true })}
        className="file-input w-full border border-my-secondary"
        multiple
      />
      {/* <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Availability Data"
        type="text"
        {...register('availableDate', { required: true})}
      /> */}
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Rent Per Month"
        type="date"
        {...register("availableDate", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Phone Number"
        type="number"
        {...register("number", { required: true })}
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Description"
        type="text"
        {...register("description", { required: true })}
      />
      <button className=" active:scale-95 bg-my-primary text-white py-3 rounded-lg w-full font-bold">
        Submit
      </button>
    </form>
  );
};

export default DaddHouse;
