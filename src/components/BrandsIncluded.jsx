import { useSelector } from 'react-redux';
export default function BrandsIncluded() {
    const isClicked = useSelector((state) => state.click_redux_slice.isClicked);
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
      <div className={isClicked ? 'bg-white py-24 sm:py-32':'bg-gray-900 py-24 sm:py-32'}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className={classNames(isClicked ? 'text-gray-900':'text-white','text-center text-lg font-semibold leading-8',)}>
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVjMfxK2sVb4_q-SaR7_YshjUp2ppLUR7tA&s"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCeA6Lxv0mZBY-rBz20fiI99XCkzxSp9ACA&s"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UrYVhBnXJiCPiYcomjozgFKcp5MgvQiI5w&s"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://cdn.prod.website-files.com/6604f81f67febd15263b9f68/663c2961bb2fa08f2548b848_Logo-Full-Lockup-Green.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bIWQqBoBEQuH5w4e03-jsApWany3ZvFujQ&s"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }
