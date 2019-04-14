import PageContent from './PageContent';

const Wip =
  () => (
    <PageContent>
      <div className='content'>
        <img src='/static/build.svg'/>
        <h2>Work in progress</h2>
        <p>Come back later!</p>
      </div>
      <style jsx>{`
.content {
  text-align: center;
}
img {
  width: 100px;
}
      `}</style>
    </PageContent>
  );

export default Wip;
