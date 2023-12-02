const LastResult = ({data}) => {
  return (
    <>
      <div className="casino-last-result-title">
        <span>Last Result</span>
        <span>
          <a>View All</a>
        </span>
      </div>
      <div className="casino-last-results">
{
  data && data?.length > 0 && (
    data[0]?.recent_winner?.map(({winner},i) => {
      return (
        <span key={i} className="result result-a">{winner.split('')[0]}</span>
      )
    })
  )
}
        {/* <span className="result result-a">D</span>
        <span className="result result-a">D</span>
        <span className="result result-b">T</span>
        <span className="result result-a">D</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span>
        <span className="result result-b">T</span> */}
      </div>
    </>
  );
};

export default LastResult;
