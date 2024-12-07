import { useSelector } from 'react-redux';

const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      "name": "Michael Johnson",
      "role": "Co-Founder / CTO",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Official_portrait_of_David_Smith_MP_crop_2.jpg"
    },
    {
      "name": "Sophia Williams",
      "role": "Co-Founder / CFO",
      "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHDzSaRBC3rPA/feedshare-shrink_800/feedshare-shrink_800/0/1714539994286?e=2147483647&v=beta&t=-kiJmPz8R7oWgtKymc0ixcgPp8B2CtFEN1Pp4SkO1LI"
    },
    {
      "name": "David Smith",
      "role": "Co-Founder / CMO",
      "imageUrl": "https://m.media-amazon.com/images/M/MV5BNTY0NDI3MGEtM2M2MS00MTAzLWEzYzYtYTAwZTQ3MTIzNTViXkEyXkFqcGc@._V1_.jpg"
    },
    {
      "name": "Olivia Brown",
      "role": "Co-Founder / COO",
      "imageUrl": "https://foxsports-wordpress-www-prsupports-prod.s3.amazonaws.com/uploads/sites/2/2024/09/FOX_NFL_Terranea-SEAMLESS_LandisRigginsCrew_0289.png"      },
    {
      "name": "James Taylor",
      "role": "Co-Founder / CSO",
      "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-504665292.jpg"
    },    
    // More people...
  ];
  
  export default function TeamSection() {
    const isClicked = useSelector((state) => state.click_redux_slice.isClicked);

    return (
      <div className={isClicked ? 'bg-slate-100 py-24 sm:py-32':'bg-slate-900 py-24 sm:py-32'}>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className={isClicked ? 'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl':'text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'}>
              Meet our leadership
            </h2>
            <p className={isClicked ? 'mt-6 text-lg leading-8 text-gray-600':'mt-6 text-lg leading-8 text-gray-300'}>
            At the heart of our company is a diverse and dynamic leadership team, each bringing unique expertise, vision, and passion to drive our success. From innovative technology to strategic financial management, our leaders work collaboratively to steer the company towards growth and excellence.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className={isClicked? 'text-base font-semibold leading-7 tracking-tight text-gray-900':'text-base font-semibold leading-7 tracking-tight text-gray-100'}>
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
