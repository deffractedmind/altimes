import React from "react";

// const MainCard = props =>
// <div className="card">
//   <div className="img-container">
//     <img alt={props.name} src={props.image} />
//   </div>
//   <div className="content">
//     <ul>
//       <li>
//         <strong>Name:</strong> {props.name}
//       </li>
//       <li>
//         <strong>Occupation:</strong> {props.occupation}
//       </li>
//       <li>
//         <strong>Location:</strong> {props.location}
//       </li>
//     </ul>
//   </div>
//   <span onClick={() => props.removeFriend(props.id)} className="remove">
//     𝘅
//   </span>
// </div>;

const MainCard = props =>

      <div className="main-container">


        <div className="container">

          {/* <nav className="navbar navbar-default" role="navigation"> */}
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                {/* <a className="navbar-brand" href="#">NYT-React</a> */}
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search">Search</a></li>
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          {/* </nav> */}

          <div className="jumbotron">
            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
          </div>

          {/* {this.props.children} */}

        </div>
      </div>

export default MainCard;