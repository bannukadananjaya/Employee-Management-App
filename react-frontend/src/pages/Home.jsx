import axios from "axios";
import React, { useEffect, useState } from "react";
import ListEmployeeComponent from "../component/ListEmployeeComponent";
// import { useNavigate } from 'react-router-dom'

function Home() {

  return(
    <div>
      <ListEmployeeComponent/>
    </div>
  )
}

export default Home;
