import { Button, Card, Flex, Modal, Space, Typography } from "antd";
import { useState } from "react";

const { Paragraph, Text, Title } = Typography;

export default function ModalCounter() {
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  return (
    <Card>
      <Space direction="vertical" size={16}>
        <div>
          <Text type="secondary">Contador global (utiliza o tema global)</Text>
          <Title level={2}>{count}</Title>
          <Paragraph>Nenhum botao ou tipografia abaixo precisa definir cor manualmente.</Paragraph>
        </div>

        <Flex gap={12} wrap>
          <Button type="primary" size="large" onClick={() => setCount((value) => value + 1)}>
            Incrementar
          </Button>
          <Button size="large" onClick={() => setOpen(true)}>
            Abrir modal
          </Button>
        </Flex>
      </Space>

      <Modal
        open={isOpen}
        title="Contador"
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        okText="Fechar"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Paragraph>O valor atual do contador e {count}.</Paragraph>
      </Modal>
    </Card>
  );
}
