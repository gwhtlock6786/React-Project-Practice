

const Shift = ({shift = {} }) => {

    const {
    employee,
    position,
    startTime,
    endTime} = shift;
  return (
   <article className="shift-card">
    <h4 className="shift-employee">
        {employee}
    </h4>
    <p className="shift-position">{position}</p>
    <p className="shift-time">
        {startTime} - {endTime}
    </p>
   </article>
  )
}

export default Shift