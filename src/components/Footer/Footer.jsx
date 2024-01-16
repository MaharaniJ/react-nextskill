function Footer() {
  const Datas = [
    {
      id: 1,
      h: "Categories",
      type1: "Men",
      type2: "Women",
      type3: "Accessories",
      type4: "Shoes",
      type5: "Denim",
      type6: "Dress",
    },
    {
      id: 2,
      h: "Infomation",
      type1: "About Us",
      type2: "Contact Us",
      type3: "Terms & Conditions",
      type4: "Returns & Exchanges",
      type5: "Shipping & Delivery",
      type6: "Privacy Policy",
    },
    {
      id: 3,
      h: "Useful Links",
      type1: "Store Location",
      type2: "Latest News",
      type3: "My Account",
      type4: "Size Guide",
      type5: "FAQs",
      type6: "FAQs 2",
    },
  ];
  return (
    <footer className="container-full px-2 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center group space-x-8 justify-evenly bg-slate-400 ">
        <div>
          <h1 className="font-bold">Kalles</h1>
          <div>
            <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
          </div>
          <div>
            {" "}
            <p>contact@company.com</p>
          </div>
          <div>
            <p>+001 2233 456</p>
          </div>
          <div>icons</div>
        </div>

        {Datas.map((data, i) => (
          <div className="flex flex-col py-6" key={i}>
            <div className="mb-4 font-bold">{data.h}</div>
            <p>
              <a className="hover:text-blue-300 cursor-pointer">{data.type1}</a>
            </p>
            <p>
              <a className="hover:text-blue-300 cursor-pointer">{data.type2}</a>
            </p>
            <p>
              <a className="hover:text-blue-300 cursor-pointer">{data.type3}</a>
            </p>
            <p>
              <a className="hover:text-blue-300 cursor-pointer">{data.type4}</a>
            </p>
            <p>
              <a className="hover:text-blue-300 cursor-pointer">{data.type5}</a>
            </p>
            <p>
              <a className="hover:text-blue-300 cursor-pointer">{data.type6}</a>
            </p>
          </div>
        ))}
        <div>
          <h1>Newsletter Signup</h1>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your Email"
              className="h-11"
            ></input>
            <label htmlFor="email"></label>
            <button className="rounded-lg absolute">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
