function Photo(props) {
  return (
    <div>
      <div>
        <img src={props.src} width={props.width} alt={props.children} />
      </div>
      {props.children}
    </div>
  );
}

export default Photo;
