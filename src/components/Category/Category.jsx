const Category = () => {
    return (
        <>
           <ul className="nav nav-tabs d-xl-none menu-tabs">
          <li className="nav-item">
            <a aria-current="page" className="nav-link active" href="/home">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/casino-list">
              Our Casino
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/live-casino-list">
              Live Casino
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/slot-list">
              Slots
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/fantasy-list">
              Fantasy
            </a>
          </li>
        </ul>  
        </>
    );
};

export default Category;




