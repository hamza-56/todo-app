const Footer = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2 className="text-white">Heading</h2>
            <p className="pr-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="text-white mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li className="text-white">
                Lorem ipsum
              </li>
              <li className="text-white">
                Nam mauris velit
              </li>
              <li className="text-white">
                Etiam vitae mauris
              </li>
              <li className="text-white">
                Fusce scelerisque
              </li>
              <li className="text-white">
                Sed faucibus
              </li>
              <li className="text-white">
                Mauris efficitur nulla
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4 text-white">Location</h4>
            <p className="text-white">
              22, Lorem ipsum dolor, consectetur adipiscing
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="text-white">© 2021. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
