const PageContent = (props) => (
  <React.Fragment>
    <div className='content'>
      {props.children}
    </div>
    <style jsx>{`
.content {
  max-width: 900px;
  padding: 15px;
  margin: auto;
}
    `}</style>
  </React.Fragment>
);

export default PageContent;
