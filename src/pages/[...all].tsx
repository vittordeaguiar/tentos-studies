import { Button, Layout, Result } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

export default function NotFoundPage() {
  return (
    <Layout className="page-layout">
      <Content className="page-content">
        <div className="page-section page-section-centered">
          <Result
            status="404"
            title="Página não encontrada"
            subTitle="A rota acessada não existe nesta aplicação."
            extra={
              <Link to="/">
                <Button type="primary" size="large">
                  Voltar para a tela inicial
                </Button>
              </Link>
            }
          />
        </div>
      </Content>
    </Layout>
  );
}
