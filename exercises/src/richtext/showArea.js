const Index = ({ info }) => {
  return (
    <span className="text" contentEditable="false">
      {info}
      <button className="btn">关闭</button>
    </span>
  );
};
export default Index;
