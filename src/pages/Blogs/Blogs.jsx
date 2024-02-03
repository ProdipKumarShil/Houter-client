import clock from '../../assets/icons/clock.svg'
import rightBlog from "../../assets/home/rightSideBlog.png";
import BlogCard from '../../components/Blog/BlogCard';

const Blogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 ">
      <p className='text-2xl font-bold text-h-primary mb-8'>Blog might you like</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2 space-y-8">
        <BlogCard isBlog={true} />
        <BlogCard isBlog={true} />
        <BlogCard isBlog={true} />
        <BlogCard isBlog={true} />
      </div>
      <div className="space-y-8 hidden md:block">
        <BlogCardSm />
        <BlogCardSm />
        <BlogCardSm />
        <BlogCardSm />
        <BlogCardSm />
      </div>
      </div>
      
    </div>
  );
};

export default Blogs;

const BlogCardSm = () => {
  return (
    <div className=" gap-8 border-b p-4">
      <img
        className="w-full mb-4 h-[144px] object-cover rounded-2xl"
        src={rightBlog}
        alt=""
      />
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-[#3C4563] font-normal">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src="https://s3-alpha-sig.figma.com/img/518f/7a5c/9f71caedbf8452d7c74782af2f06e925?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2HWwqT3Wu8DtB7w9ES01bAy-ZA6XvSEAlUgqb8N3SnmKvpe3WlMi2aMKkV7geieuHotFo3ZYQeZueFJWr4hp41MoJUrJZpCI8SJhzu9kY~kvT6aHn6L342QKoUr0~YFvY6i1tBua3HSw7ow0l6jx9rhfGLKRtVk8d1ZvUnUFNyhsXsOTYb6ppo2L2UH6fR~MwnUIGHFEfrAr1WIv~6AEsd6iEEbz9yCbt7IiBCGLGl-dEaL-~dEr3d5XfMHHNmLjCxoQARRpj4h3XsyWmnqHYW0lm2eYfqquKmCgB8fjKikBebZYV4muVPkuCIQdI~q-urImQqWq1sGYHP0Fi64Jw__"
            alt=""
          />
          <p>Dianne Russell</p>
        </div>
        <p className="text-[18px] font-medium text-h-primary capitalize">
          The things we need to check when we want to buy a house
        </p>
        <div className="flex items-center gap-3">
          <img src={clock} alt="" />
          <p className="text-[#888B97]">4 min read | 25 Apr 2021</p>
        </div>
      </div>
    </div>
  );
};
