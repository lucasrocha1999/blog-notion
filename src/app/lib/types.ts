export interface NotionDatabaseResponse {
  object: string;
  results: Result[];
  next_cursor?: any;
  has_more: boolean;
  type: string;
  page_or_database: Pageordatabase;
}

interface Pageordatabase {}

interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover?: any;
  icon?: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url?: any;
}

interface Properties {
  Date: Date;
  Description: Description;
  Slug: Description;
  Published: Published;
  Tags: Tags;
  Title: Title;
}

interface Title {
  id: string;
  type: string;
  title: Richtext[];
}

interface Tags {
  id: string;
  type: string;
  multi_select: Multiselect[];
}

interface Multiselect {
  id: string;
  name: string;
  color: string;
}

interface Published {
  id: string;
  type: string;
  checkbox: boolean;
}

interface Description {
  id: string;
  type: string;
  rich_text: Richtext[];
}

interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface Text {
  content: string;
  link?: any;
}

interface Date {
  id: string;
  type: string;
  last_edited_time: string;
}

interface Parent {
  type: string;
  database_id: string;
}

interface Createdby {
  object: string;
  id: string;
}
