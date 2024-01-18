import React from 'react'
import Course from './Course'
export default function Home() {
  let sum ="add summary here";
  let mp="add summary here ";
  let sp="add summary here ";
  return (
    <div className="d-flex justify-content-center">
      {/* all three files (Cinematography,Moviemaking,Screenplay) moved to component/Data */}
      <Course cinePath="/cine" name={"cinematography"} summary={sum}/>
      <Course cinePath="/movie" name={"moviemaking"} summary={mp} />
      <Course cinePath="/screen "name={"screenplay"} summary={sp} />
      </div>
  )
}
