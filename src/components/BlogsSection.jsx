import { useSelector } from 'react-redux';

const posts = [
  {
    id: 1,
    title: "Maximize Your Marketing Impact",
    href: "#",
    description:
      "Learn the most effective strategies to elevate your marketing campaigns. Focus on targeting the right audience and creating meaningful content that drives conversions. Master the art of using data to refine your approach and grow your business.",
    date: "Dec 2, 2024",
    datetime: "2024-12-02",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Sarah Lee",
      role: "Marketing Specialist",
      href: "#",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrueP5EIgpmK9Et_IfFDrpv7q2xrdXHyI9g&s",
    },
  },
  {
    id: 2,
    title: "Boost Brand Awareness with Social Media",
    href: "#",
    description:
      "Explore how to enhance your brand's visibility through powerful social media strategies. Learn how to engage your followers, create shareable content, and build a loyal community that supports your business.",
    date: "Dec 2, 2024",
    datetime: "2024-12-02",
    category: { title: "Social Media", href: "#" },
    author: {
      name: "James Carter",
      role: "Social Media Manager",
      href: "#",
      imageUrl:
        "https://i.pinimg.com/564x/d2/71/ec/d271ecf4047e8845b61befc2b1247186.jpg",
    },
  },
  {
    id: 3,
    title: "Effective Email Marketing Strategies",
    href: "#",
    description:
      "Unlock the potential of email marketing. Learn how to craft engaging emails that build relationships, improve open rates, and convert leads into loyal customers. Leverage automation to save time while driving results.",
    date: "Dec 2, 2024",
    datetime: "2024-12-02",
    category: { title: "Email Marketing", href: "#" },
    author: {
      name: "Emily Clark",
      role: "Content Strategist",
      href: "#",
      imageUrl:
        "https://i0.wp.com/leesarah.net/wp-content/uploads/2020/12/IMG_2998.jpg?fit=1219%2C1219&ssl=1",
    },
  },
    // More posts...
  ];
  
  export default function BlogsSection() {
    const isClicked = useSelector((state) => state.click_redux_slice.isClicked);

    return (
      <div className={isClicked ? 'bg-slate-100 py-24 sm:py-32':'bg-black py-24 sm:py-32'}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className={isClicked ? 'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl':
              'text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl'}>
              From the blog
            </h2>
            <p className={isClicked ? 'mt-2 text-lg leading-8 text-gray-600':
              'mt-2 text-lg leading-8 text-gray-400'}>
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className={isClicked ? 'mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600':
                    'mt-3 text-lg font-semibold leading-6 text-slate-100 group-hover:text-gray-300'}>
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className={isClicked ? 'font-semibold text-gray-900':'font-semibold text-slate-100'}>
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className={isClicked ? 'text-gray-600':'text-gray-400'}>{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
