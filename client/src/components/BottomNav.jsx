const BottomNav = (prop) => {
  const { data, setData } = prop
  return ( 
    <>
    {data ? 
    <div className="lists-detail">
    <p>{data.length} items left</p>
    <div className="detail-mid">
      <span>All</span>
      <span>Active</span>
      <span>Completed</span>
    </div>
    <span className="detail-end">Clear Completed</span>
  </div>
    :
    <div className="lists-detail">
      <p>Add todos to see them</p>
    </div>
  }
    </>
  );
}

export default BottomNav;