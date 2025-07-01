import React from 'react'
import { BeatLoader } from "react-spinners";

const Spinner = ( {loading} ) => {
  return (
    <div>
      <BeatLoader loading={loading} />
    </div>
  )
}

export default Spinner
