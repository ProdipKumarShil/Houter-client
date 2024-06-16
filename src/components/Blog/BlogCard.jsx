import rightBlog from "../../assets/home/rightSideBlog.png";
import clock from '../../assets/icons/clock.svg'

const BlogCard = ({isBlog}) => {
  return (
    <div className={isBlog ? " border-b pb-4" : ''}>
      <img
        className="w-full mb-6 h-[280px] object-cover rounded-2xl"
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
        <p className="text-[24px] font-medium text-h-primary">12 Things to know before buying a house</p>
        <p className="font-normal text-[#626687]">Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
        <div className="flex items-center gap-3">
          <img src={clock} alt="" />
          <p className="text-[#888B97]">4 min read | 25 Apr 2021</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
