import Card from '../../../../components/admin/Card';

import "./styles.css";

function DashboardPosts() {
  return (
    <div id='Panel'>
      <div className="section">
        <h5>Posts</h5>
      </div>
      <div className="cards">
        <div className="col l4">
          <Card 
            title="Criar novo post" 
            text="É por aqui que você cria uma nova postagem para seu blog." 
            link={{label: "Começar", url: "/dashboard/posts/create"}} />
        </div>
        <div className="col l4">
          <Card 
            title="Listar posts" 
            text="Aqui você tem a listagem de todos os posts publicados, rascunhos ou na lixeira." 
            link={{label: "Listar", url: "/dashboard/posts/list"}} />
        </div>
        <div className="col l4">
          <Card 
            title="Comentários" 
            text="Aqui você gerencia os comentários que suas postagens receberam." 
            link={{label: "Gerenciar", url: "/dashboard/posts/comments"}} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPosts;