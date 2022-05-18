import './App.css';

function App() {
  return (

    <div>
      <div class="uvscontainers">
        <div class="row">
          <div class="col-md-3 bg-grayvs">
            <nav className="navbar navbar-expand-lg navbar-light mt-5">  <a className="navbar-brand" href="#">PATIENT</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-home"></i> Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-table"></i> Enquiries</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#"><i className="	fa fa-user"></i> Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i class='fa fa-credit-card'></i> Payment</a>
                  </li>
                </ul>
              </div>


              <div className="card uvscard">

                <div className="card-body">
                  <h5 className="card-title">Need Our Help?</h5>

                  <a href="#" className="btn btn-success successbg">Contact Us</a>
                </div>
              </div>

            </nav>



          </div>
          <div class="col-md-9 bg-whiteyvs">

            <form>
              <div className="form-row">
                <div className="col">
                  <i class='fa fa-search'></i>       <input type="text" placeholder="Search.... " className="uvstextbox" />


                </div>
                <div className="col">

                </div>
              </div>
            </form>


            <h2 class="mt-5">My Patient Profiles</h2>




            <div className="container">
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="card user-carduvs">

                    <div className="card-block">
                      <h6>2d ago <strong>...</strong></h6>
                      <div className="user-image">
                        <img src="./pic1.PNG" className="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-600 m-t-25 m-b-10">Jonnathan<br />Smith</h6>
                      <p className="text-success success">Active </p>
                      <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>Storage 45%</h6>        </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card user-carduvs2">

                    <div className="card-block">
                      <h6>15d ago  <strong>...</strong></h6>
                      <div className="user-image">
                        <img src="./pic2.PNG" className="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-600 m-t-25 m-b-10">Kate<br />Smith</h6>
                      <p className="text-success success">Active </p>
                      <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "81%" }} aria-valuenow="81" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>Storage 81%</h6>        </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card user-carduvs2">

                    <div className="card-block">
                      <h6>30d ago  <strong>...</strong></h6>
                      <div className="user-image">
                        <img src="./pic3.PNG" className="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-600 m-t-25 m-b-10">Alexander<br />Smith</h6>
                      <p className="text-danger">Inactive </p>
                      <div class="progress">
                        <div class="progress-bar bg-success successbg" role="progressbar" style={{ width: "21%" }} aria-valuenow="21" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <h6>Storage 21%</h6>        </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card user-carduvs22">

                    <div className="card-block text-center">

                      <h3> <a href="#">+</a></h3>
                      <h5>Create new patient profile</h5>

                    </div>
                  </div>
                </div>

                <div className="col-md-12 mt-5">

                  <hr /><br />
                  <div className="row">
                    <div className="col-md-4 col-sm-8">
                      <h6>Available patient profile 3 of 5</h6>
                      <div class="progress">
                        <div class="progress-bar bg-success successbg" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                    </div>

                    <div className="col-md-8 col-sm-4 text-right">
                      <button type="button" className="btn btn-outline-secondary">Upgrade</button>
                    </div>

                  </div>
                </div>


              </div></div>









          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
