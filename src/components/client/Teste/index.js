import './styles.css';

const Teste = () => {
  return (
    <div id="Teste">
      <div className="row">
        <div className="col l2 hide-on-med-and-down">Menu</div>
        <div className="posts s12 m12 l10">
          <div className="col s12 m8 l7 feature">Feature</div>
          <div className="col s12 m4 l3 recentPosts">Recent Posts</div>
          <div className="col s12 m12 l10 offset-l2 otherPosts">Other Posts</div>
        </div>
      </div>
    </div>
  )
}

export default Teste;