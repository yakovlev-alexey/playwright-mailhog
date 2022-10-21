type Path = {
  Relays: string[] | null;
  Mailbox: string;
  Domain: string;
  Params: string;
};

type MessagePart = {
  Headers: Record<string, string>;
  Body: string;
  Size: number;
  Mime: null;
};

type Message = {
  ID: string;
  From: Path;
  To: Path;
  Content: MessagePart;
  Created: string;
  MIME: {
    Parts: MessagePart[];
  };
  Raw: {
    From: string;
    To: string;
    Data: string;
    Helo: string;
  };
};

type Messages = {
  total: number;
  start: number;
  count: number;
  messages: Message[];
};

type PaginationQuery = {
  start?: number;
  limit?: number;
};

type SearchQuery = {
  kind: "from" | "to" | "containing";
  query: string;
} & PaginationQuery;

export { Path, MessagePart, Message, Messages, PaginationQuery, SearchQuery };
