function TopMost(){
    
    const profile = ["Biobaku Oluwole","timboss","/profile/1.jpg"];

    return(<>

           <div className="row d-none">
                <div className="col-5"></div>
                <div className="col-2">
                    <div className="make-circle bg-warning"></div>
                </div>
                <div className="col-5"></div>
           </div>

            <div className="row">
                <div className="col-12 bg-light personal-panel">

                    <div className="row">
                        <div className="col-9">
                            <div className="personal-info">

                                <div className="profile-img-container">
                                     <img alt="profile-image" src={profile[2]} className="profile-img"/> 
                                </div>

                                <div className="profile-details">
                                    <p className="f-name">Hi , <span className="fw-bold">{profile[0]}</span></p>
                                    <p className="u-name">@{profile[1]}</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="personal-notification float-end me-3">
                                <button className="btn btn-primary btn-sm position-relative">
                                    <i className="bi bi-bell"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">+99
                                        <span className="visually-hidden">unread</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
    </>)

}

export default TopMost