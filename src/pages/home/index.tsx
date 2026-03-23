import { Layout, Typography, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import MarkdownEditor from "../../components/MarkdownEditor";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const { Title, Text } = Typography;
const { Sider, Content } = Layout;

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [markdownText, setMarkdownText] = useLocalStorage("tentos-md-editor", "");

  const menuItems = [
    { key: "/", label: "Hoje" },
    { key: "/tarefas", label: "Todas as Tarefas" },
    { key: "/configuracoes", label: "Configurações" },
  ];

  const selectedKey = menuItems.find((item) => location.pathname === item.key)?.key || "/";

  return (
    <Layout style={{ minHeight: "100vh", height: "100vh" }}>
      <Sider width={260} theme="light" style={{ borderRight: "1px solid var(--border)" }}>
        <div style={{ padding: "32px 24px" }}>
          <Title level={3} className="page-title" style={{ marginBottom: 4 }}>
            Tentos Notes
          </Title>
          <Text type="secondary" style={{ display: "block", marginBottom: 32, fontSize: 13 }}>
            Focus on what matters
          </Text>
          
          <Menu 
            mode="inline" 
            selectedKeys={[selectedKey]}
            onClick={({ key }) => navigate(key)}
            style={{ borderRight: 0, background: "transparent" }}
            items={menuItems}
          />
        </div>
      </Sider>
      <Layout className="bg-(--bg) flex flex-col h-full overflow-hidden">
        <Content className="flex-1 w-full h-full overflow-hidden">
          <MarkdownEditor value={markdownText} onChange={setMarkdownText} />
        </Content>
      </Layout>
    </Layout>
  );
}
